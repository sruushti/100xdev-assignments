const jwt = require("jsonwebtoken");
const {JWT_TOKEN, JWT_SECRET} = require("../config");

function adminMiddleware(req, res, next) {

    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedValue.username){
            req.username = decodedValue.username,
            next();
        }else{
            res.status(403).json({
                msg : "authentication failed"
            });
        }
    }catch(error){
        res.json({
            msg: "incorrect inputs"
        });
    }
}

module.exports = adminMiddleware;