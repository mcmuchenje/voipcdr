var express = require("express");
var router = express.Router(); //a new instance of express router and adding routes to this router. 
var db = require("../models");
var extension = require("../models/extension");
var middleware = require("../middleware");

//INDEX ROUTE - show dashboard

router.get('/', middleware.isLoggedIn, function(req , res) {
  let i = 1;
  let today = new Date();
  let todayDate = today.toISOString().substring(0, 10);
  let maxQuery = `select count(*) as incoming from cdr where dcontext='ext-queues' and calldate like '${todayDate}%'; select count(*) as outgoing from cdr where RemoteIP='172.16.12.39' and calldate like '${todayDate}%'; SELECT * FROM cdr WHERE calldate LIKE '${todayDate}%' ORDER BY billsec DESC LIMIT 5;select sum(billsec) as sum from cdr where disposition='ANSWERED' and RemoteIP='172.16.12.39' and calldate like '${todayDate}%'; `
  db.getConnection(function(err , connection){
    connection.query(maxQuery, function(error, results,fields) {
      connection.release()
      if (error) throw error;
      let internal = results[0][0]
      let out = results[1][0]
      let total = results[3][0]
      //res.send(JSON.stringify(results));
      res.render('main/dashboard', { maxCaller: results[2] , i , internal , out , total })
      console.log(todayDate)
    })
  })
})

router.get('/extensions', middleware.isLoggedIn, function(req , res){
  let extensionQuery = "SELECT * FROM devices order by id"
  extension.getConnection(function(err, connection) {
    connection.query(extensionQuery, function(error , results, fields){
      connection.release();
      if (error) throw error;
      res.render('main/extension' , { sip: results });
    })
  })
})

router.get("/calls/:page", middleware.isLoggedIn, function(req , res) {
  const limit = 50
  const page = req.params.page || 1
  const offset = (page - 1) * limit
  const callsQuery = "select count(*) as rows from cdr" +";"+  "select * from cdr ORDER BY calldate DESC limit "+limit+" OFFSET "+offset
  db.getConnection(function(err, connection) {
    connection.query(callsQuery, function (error, results, fields) {
      connection.release();
           if (error) throw error;
	    //res.send(JSON.stringify(results));
	let total = results[0][0];
    res.render('main/calls', {calls: results[1], current: page, pages: Math.ceil(total.rows / limit), total })
    })
  })
})


module.exports = router;
