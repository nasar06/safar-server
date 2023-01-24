const mongoose = require("mongoose")


//--------- Create a new Mongoose schema -----------//
//User Schema
const userSchema = new mongoose.Schema({
    email : {type: String}
});


//--------Create a Mongoose model from the schema-------//
//User Model
const User = mongoose.model('User', userSchema);


//export Models
exports.User = User