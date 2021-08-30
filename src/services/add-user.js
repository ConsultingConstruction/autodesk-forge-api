
const express = require('express');
const router = express.Router();
var sql = require("mssql");
const azure = require('../../config/azure');
const validationUser = require('../middleware/validate-user')

router.post('/user/add',validationUser, function (req, res, error) {

  sql.connect(azure.config, async function (err) {
    if (err) console.log(err);

    var request = new sql.Request();

    let query = "INSERT INTO users (name, email, password, isAdmin, idRol) OUTPUT Inserted.idUser, Inserted.email VALUES ('" + req.query.name + "','" + req.query.email + "','" + req.query.password + "'," + 1 + "," + 1 + ")"
    console.log(query)

    request.query(query, function (error, result) {
      if (error) {
        res.json(error)
      } else {
        res.json({ statusCode: 0, message: "User registered", user: result.recordsets[0][0] })
      }
    });
  });

});

module.exports = router;