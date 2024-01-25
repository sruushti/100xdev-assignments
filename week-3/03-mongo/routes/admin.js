const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username : username,
        password : password
    })
    res.json({
        "msg" : "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title, description,imageLink,price
    })
    res.json({
        message : 'Course created successfully',
        courseId : newCourse.id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const res = await Course.find({});
    res.json({
        courses:res
    })
});

module.exports = router;