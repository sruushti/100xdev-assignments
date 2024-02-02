const jwt = require("jsonwebtoken");
const { secret } = require('../config');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try{
        const decodedValue = jwt.verify(jwt, secret);
        if(decodedValue.username){
            next();
        }else{
            res.status(403).json({
                msg : "authentication failed"
            })
        }
    }catch(error){
        res.json({
            msg:"incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;