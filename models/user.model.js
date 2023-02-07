const mongoose = require("mongoose")


//create schema

//User Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
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


//Seller Schema
const organizerSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    __v: { type: Number, select: true },

    first_name: {
        type: String,
        // required: true
    },
    last_name: {
        type: String,
        // required: true
    },
    role: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        unique: true,
    },
   nid_no: {
        type: Number,
        unique: true,
    },
   nid_img: {
        type: String
    },
    img: {
        type: String,
        // required: true
    },
    hotel_name: {
        type: String,
        unique: true,
        // required: true
    },
    hotel_img: {
        type: String,
        // required: true
    },
    hotel_location: {
        type: String,
        // required: true
    },
    hotel_view: {
        type: String
    },
    country: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
});

//create model

//User Model
const User = mongoose.model('User', userSchema);

//Organizer Model
const Organizer = mongoose.model('Organizer', organizerSchema);

//export Models
exports.User = User
exports.Organizer = Organizer