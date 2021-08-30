const jwt = require('jsonwebtoken')
require('dotenv').config()

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const token = req.header('accessToken')
    if (!token) return res.status(401).json({ error: 'Access denied' })
    try {
        const verified = jwt.verify(token, process.env.secretKey)
        req.user = verified
        next() 
    } catch (error) {
        res.status(400).json({error: 'Token is not valid'})
    }
}

module.exports = verifyToken;
