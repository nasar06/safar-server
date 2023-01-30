const mongoose = require("mongoose")


//create schema

//User Schema
const userSchema = new mongoose.Schema({
    email : String,
    name: String,
    age: Number,
    about: String,
    location: String,
    work: String,
    img: String
});

//create model

//User Model
const User = mongoose.model('User', userSchema);

//export Models
exports.User = User