const express = require("express");
const app = express();
const paginate = require('express-paginate');
const requireLogin = require('../middlewares/requireLogin')
const db = require("../models/database1");
const db2 = require("../models/database2");
const { Op } = require("sequelize");


module.exports = (app) => {

app.get('/api/voice', requireLogin, async function(req , res){
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

  res.send({ incoming , outgoing , top5 , sum })
})

app.get('/api/extension', requireLogin, async function(res, res){
  const sip = await db2.users.findAll({
    order: [
        ['extension', 'ASC']
    ]
  });

  res.send({ sip })
})

app.use(paginate.middleware(10, 50));

app.get("/api/calls",requireLogin, (req, res, next ) => {
  db.cdr.findAndCountAll({
    limit: req.query.limit,
    offset: req.skip,
    order: [
      ['calldate', 'DESC']
    ]
  })
  .then(results => {
    const itemCount = results.count;
    const pageCount = Math.ceil(results.count / req.query.limit);
    res.send({
      calls: results.rows,
      pageCount,
      itemCount,
      pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
    });
  }).catch(err => next(err))
});

app.get("/api/recording",requireLogin, (req, res ) => {
  db.cdr.findAndCountAll({
    limit: req.query.limit,
    offset: req.skip,
    order: [
      ['calldate', 'DESC']
    ]
  })
  .then(results => {
    const itemCount = results.count;
    const pageCount = Math.ceil(results.count / req.query.limit);
    res.send({
      calls: results.rows,
      pageCount,
      itemCount,
      pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
    });
  }).catch(err => next(err))
});

};
