const {Router} = require("express");
const middleware = require("../middleware/admin");
const {Admin, User, Card} = require("../db");
const router = Router();
const {JWT_TOKEN, JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

router.post("/signup",async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create ({
        username : username,
        password :password,
    });
    res.json({
        msg : "Admin created successfully",
    });
});

router.post("/signin", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const admin = Admin.findOne({username, password});

    if(admin){
        const token = jwt.sign({
            username,
        },JWT_SECRET);
        res.json({
            token
        });
    }else{
        res.status(410).json({
            msg: "incorrect inputs"
        });
    }
});

module.exports = router;