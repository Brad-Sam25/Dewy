import jwt from 'jsonwebtoken';

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const auth = async(req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    
    const isCustomAuth = token.length < 500;

    let decodedData;

    if(!token) {
        return res.status(401).json({ msg: 'You have no token!' });
    }

    if(token && isCustomAuth) {
        decodedData = jwt.verify(token, JWT_SECRET);

        req.userId = decodedData?.id;
    } else {
        decodedData =jwt.decode(token);

        req.userId = decodedData?.sub;
    }
    try{
        const decoded = jwt.verify(token, secret);
        req.user = decoded
        next();
    } catch(e) {
        res.status(400).json({ msg: 'Token is not valid' })
    }
}

export default auth;