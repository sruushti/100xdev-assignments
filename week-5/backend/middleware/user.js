const {JWT_TOKEN, JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next){
    
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        req.username = decodedValue.username;
        next();
    }catch(error){
        res.status(403).json({
            msg: "authentication failed",
        });
    }
}

module.exports = userMiddleware;