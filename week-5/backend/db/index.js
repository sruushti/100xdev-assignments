const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://srush:K3xk71h0UhEWg6vq@cluster0.hngrqaj.mongodb.net/")
.then(()=>{
    console.log("Connect to MongoDB");
})
.catch((error)=>{
    console.error("Error connection to MongoDB:",error);
});

const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema ({
    username : String,
    password : String,
    Cards : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Card"
        },
    ],
});

const CardSchema = new mongoose.schema ({
    name : String,
    description : String,
    socialMediaHandle : String,
    interests : String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Card = mongoose.model('Card', CardSchema);

module.exports = {
    Admin,
    User,
    Card,
}