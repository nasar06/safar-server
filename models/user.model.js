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

const imagesSchema = new mongoose.Schema({
    url: {
        type: String
    },
})

//Organizer Schema
const organizerSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
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

   nid_img: {
        type: String
    },
    hotel_img: [
        imagesSchema
    ],
    
    hotel_view: {
        type: String
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