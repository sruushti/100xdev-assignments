const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {secret} = require("../config");
const {Admin, User, Course} = require("../db");
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username : username,
        password : password
    })

    res.json({
        msg : "Admin created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.find({
        username, password
    })
    if(admin){
        const token = jwt.sign({
            username
        },secret);
        res.json({
            token
        })
    }else{
        res.status(410).json({
            msg : "incorrect credentials"
        })
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.bpdy.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.find({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        msg : "Course created successfully", courseId : newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await cOURSE.find({});
    res.json({
        courses : response
    })
});

module.exports = router;