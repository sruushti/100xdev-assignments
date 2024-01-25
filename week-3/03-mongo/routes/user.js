const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db");
const {default:mongoose} = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.username;
    User.create({
        username, password
    })
    res.json({
        msg : "User created successfully"
    })
});

router.get('/courses', async(req, res) => {
    const res = await Course.find();
    res.json({
        courses:res
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router