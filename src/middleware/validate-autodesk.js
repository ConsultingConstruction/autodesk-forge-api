
var sql = require("mssql");
const azure = require('../../config/azure');

const validateAutoDesk = (req, res, next) => {

    sql.connect(azure.config, async function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        let query = "SELECT * FROM autodesk WHERE email=" + "'" + req.query.email + "'"
        console.log(query)

        request.query(query, function (error, result) {
            if (error) {
                res.json(error)
            } else {
                if (result.rowsAffected > 0) {

                    validateAuth = false
                    return res.json({ statusCode: 1, message: "Registered autodesk account tries with another" })

                } else {

                    next();

                }
            }
        });
    });
   
}


module.exports = validateAutoDesk;