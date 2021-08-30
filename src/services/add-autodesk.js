
const express = require('express');
const router = express.Router();
var sql = require("mssql");
const azure = require('../../config/azure');
const validateAutoDesk = require('../middleware/validate-autodesk')

router.post('/autodesk/add', validateAutoDesk, function (req, res, error) {

    sql.connect(azure.config, async function (err) {
        if (err) res.json(err);

        var request = new sql.Request();

        let query = "INSERT INTO autodesk (email) OUTPUT INSERTED.idAutodesk VALUES ('" + req.query.email + "')"
        console.log(query)

        request.query(query, function (error, result) {
            if (error) {
                res.json(error)
            } else {
                res.json({ statusCode: 0, message: "autodesk registered" })
            }
        });
    });

});

module.exports = router;