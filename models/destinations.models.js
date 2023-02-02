const mongoose = require("mongoose")


//--------- Create a new Mongoose schema -----------//
//Destinations Schema
const destinationSchema = new mongoose.Schema({
    hotel_name: {type: String},
    description: {type: String},
    country: {type: String},
    "location.city" : {type: String},
    address : {type: String},
    zip_code: {type: String},
    regular_price: {type: Number},
    offer_price: {type: Number},
    url: {type: String},
    name: {type: String},
    size: {type: String},
    sleep: {type: Number},
    sleepYearly_deals: {type: Boolean},
    Monthly_deals: {type: Boolean},
    Contact: {type: String},
    Hotel_id: {type: Number},
    Promoted: {type: String}
});
//destination Categories schema
const destinationCategoriesSchema = new mongoose.Schema({
    city : {type: String},
    spots : {type: String},
    img : {type: String}
});



//--------Create a Mongoose model from the schema-------//
//Destinations Model
const Destination = mongoose.model('Destination', destinationSchema);
//destination Categories Model
const DestinationCategory = mongoose.model('DestinationCategory', destinationCategoriesSchema);





//export Models
exports.DestinationCategory = DestinationCategory
exports.Destination = Destination
