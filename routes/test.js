var express = require("express");
var app = express();
var db = require("../models/database1");
var db2 = require("../models/database2");
const { Op } = require("sequelize");


module.exports = (app) => {

app.get('/api/voice', async function(req , res){
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

app.get('/api/extension', async function(res, res){
  const sip = await db2.users.findAll({
    order: [
        ['extension', 'ASC']
    ]
  });

  res.send({ sip })
})

};