const mongoose = require("mongoose")


//create schema

//SearchLocation Schema
const searchLocationSchema = new mongoose.Schema({
    location : {type: String}
});



//export Models
exports.searchLocationSchema = searchLocationSchema