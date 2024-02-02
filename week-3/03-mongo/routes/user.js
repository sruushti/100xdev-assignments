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

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.courseId;

    await User.updateOne({
        username : username
    },{
        "$push" : {
            purchaseId : courseId
        }
    })
    res.json({
        msg : "Course purchased successfully "
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const user = await Course.findOne({
        username : req.headers.username
    });
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });
    res.json({
        courses:courses
    })
});

module.exports = router