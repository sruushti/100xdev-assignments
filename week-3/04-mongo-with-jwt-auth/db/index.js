const mongoose = require('mongoose');

// Connect to MongoDB
//mongoose.connect('mongodb+srv://srush:K3xk71h0UhEWg6vq@cluster0.hngrqaj.mongodb.net/');
mongoose.connect('mongodb+srv://srush:K3xk71h0UhEWg6vq@cluster0.hngrqaj.mongodb.net/')
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageLink : String,
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}