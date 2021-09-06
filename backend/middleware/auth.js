const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token) {
        res.status(401).json({ msg: 'You have no token!'});
    }

    try{
        // verify token
        const decoded = jwt.verify(token, secret);
        // Add user from payload
        req.user = decoded
        next();
    } catch(e) {
        res.status(400).json({ msg: 'Token is not valid' })
    }
}

module.exports = authMiddleware;