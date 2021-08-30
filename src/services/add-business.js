
const express = require('express');
const router = express.Router();
var sql = require("mssql");
const azure = require('../../config/azure');

router.post('/business/add', function (req, res, error) {

  sql.connect(azure.config, async function (err) {
    if (err) res.json(err);

    var request = new sql.Request();

    let query = "INSERT INTO business (name, idUser) VALUES ('" + req.query.name + "'," + req.query.idUser + ")"
    console.log(query)

    request.query(query, function (error, result) {
      if (error) {
        res.json(error)
      } else {
        res.json({ statusCode: 0, message: "Business registered" })
      }
    });
  });

});

module.exports = router;