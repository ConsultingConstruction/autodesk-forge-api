
var sql = require("mssql");
const azure = require('../../config/azure');

const validateBusiness = (req, res, next) => {

    sql.connect(azure.config, async function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        let query = "SELECT * FROM business"
        console.log(query)

        request.query(query, function (error, result) {
            if (error) {
                res.json(error)
            } else {
                if (result.rowsAffected < 1) {

                    validateAuth = false
                    return res.json({ statusCode: 1, message: "Registered business account tries with another" })

                } else {

                    next();

                }
            }
        });
    });
}


module.exports = validateBusiness;