var express = require("express");
var router = express.Router();
var db = require("../models/database1");
var db2 = require("../models/database2");
var middleware = require("../middleware");
const { Op } = require("sequelize");

router.get('/test', middleware.isLoggedIn,  async function(req , res){
  var i = 1
  var day = new Date();
  var day = day.toISOString().substring(0, 10);
  const incoming = await db.cdr.count({
    where: {
      dcontext: 'ext-queues',
      calldate: {
        [Op.startsWith]: day
      }
    }
  });

  const outgoing = await db.cdr.count({
    where: {
      RemoteIP: '172.16.12.39',
      calldate: {
        [Op.startsWith]: day
      }
    }
  });

  const top5 = await db.cdr.findAll({
    where: {
      calldate: {
        [Op.startsWith]: day
      }     
    },
    order: [
        ['billsec', 'DESC']
    ],
    limit: 5
  });

  const sum = await db.cdr.sum('billsec', {
    where: {
      disposition: 'ANSWERED',
      RemoteIP: '172.16.12.39',
      calldate: {
        [Op.startsWith]: day
      }
    }
  })

  res.render('main/dashboard', { incoming , outgoing , top5 , sum , i })
})

router.get('/extension', middleware.isLoggedIn, async function(res, res){
  const sip = await db2.users.findAll({
    order: [
        ['extension', 'ASC']
    ]
  });

  res.render('main/extension', { sip })
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

router.get('/recordings/:page', middleware.isLoggedIn, function(req , res) {
	const limit = 50
  	const page = req.params.page || 1
  	const offset = (page - 1) * limit
    let rec = "select count(*) as rows from cdr where rec_name NOT LIKE 'q%' " +";"+ "SELECT * FROM cdr WHERE disposition='ANSWERED' AND rec_name NOT LIKE 'q%' ORDER BY calldate DESC limit "+limit+" OFFSET "+offset
        db.getConnection(function(err, connection) {
                connection.query(rec, function (error, results, fields) {
                        connection.release();
                        if (error) throw error;
                        let total = results[0][0];
            //res.send(JSON.stringify(results));
                res.render('main/recordings' , { rec: results[1], current: page, pages: Math.ceil(total.rows / limit), total } )
    })
  })
})

module.exports = router;
