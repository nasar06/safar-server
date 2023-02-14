const mongoose = require("mongoose")


//create schema

//User Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
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
    },
    language: {
        type: String
    },
    profile_img: {
        type: String
    }
});

const imagesSchema = new mongoose.Schema({
    url: {
        type: String
    },
});

//Organizer Schema
const organizerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
   
    role: {
        type: String,
        required: true
    },
//------update
    full_name: {
        type: String,
        // required: true
    },
    contact: {
        type: String,
        unique: true,
    },
    bank_account: {
        type: String,
        unique: true,
    },
    hotel_id: {
        type: String,
        unique: true,
    },
    hotel_name: {
        type: String,
        unique: true,
        // required: true
    },
    img: {
        type: String,
        // required: true
    },
   nid_no: {
        type: String,
        unique: true,
    },
   address: {
        type: String,
        unique: true,
    },
    country: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    zip_code: {
        type: String,
        // required: true
    },
    
    hotel_location: {
        type: String,
        // required: true
    },

     hotel_img: [
        imagesSchema
    ],

   nid_img: {
        type: String
    },
    
    hotel_view: {
        type: String
    },
    
});


// Guide Schema
const guideSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
   photo: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

//create model

//User Model
const User = mongoose.model('User', userSchema);

//Organizer Model
const Organizer = mongoose.model('Organizer', organizerSchema);

// Guide Model
const Guide = mongoose.model('Guide', guideSchema);

//export Models
exports.User = User
exports.Organizer = Organizer
exports.Guide = Guide