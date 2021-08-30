
var sql = require("mssql");
const azure = require('../../config/azure');

const validateUser = (req, res, next) => {

    sql.connect(azure.config, async function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        let query = "SELECT * FROM users WHERE email=" + "'" + req.query.email + "'"
        console.log(query)

        request.query(query, function (error, result) {
            if (error) {
                res.json(error)
            } else {
                if (result.rowsAffected > 0) {

                    validateAuth = false
                    return res.json({ statusCode: 1, message: "Registered user tries with another" })

                } else {

                    next();

                }
            }
        });
    });

}


module.exports = validateUser;