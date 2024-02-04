const {Router} = require("express");
const router = Router();
const {User} = require("../db");
const middleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

router.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username : username,
        password : password
    });

    res.json({
        msg: "user created succcessfully"
    });
});

router.post("/signin", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({username, password});

    if(user){
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        });
    }else{
        res.status(411).json({
            msg: "incorrect credentials"
        });
    }
});