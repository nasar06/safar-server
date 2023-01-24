const mongoose = require("mongoose")


//create schema

//User Schema
const userSchema = new mongoose.Schema({
    email : {type: String}
});


//create model

//User Model
const User = mongoose.model('User', userSchema);

//export Models
exports.User = User