const mongoose = require("mongoose")


//create schema

//User Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    mobile: {
        type: String
    },
    age: {
        type: Number
    },
    gander: {
        type: String
    },
    about: {
        type: String
    },
    location: {
        type: String
    },
    work: {
        type: String
    },
    img: {
        type: String
    }
});

//create model

//User Model
const User = mongoose.model('User', userSchema);

//export Models
exports.User = User