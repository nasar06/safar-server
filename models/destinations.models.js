const mongoose = require("mongoose")


//--------- Create a new Mongoose schema -----------//
//Destinations Schema
const Room_typeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sleep: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    bed: [{
        size:{type: String}
    }]
});
// const locationSchema = new Schema({
//     country: {type: String},
//     city: {type: String},
//     address: {type: String},
//     zip_code: {type: String}
// });

const locationSchema = new mongoose.Schema({
    country: {type: String},
    city: {type: String},
    address: {type: String},
    zip_code: {type: String}
});

const imagesSchema = new mongoose.Schema({
    url: {type: String},
})
const facilitiesSchema = new mongoose.Schema({
    name: {type: String},
})

const destinationSchema = new mongoose.Schema({
    hotel_name: {type: String},
    description: {type: String},
    location: locationSchema,
    regular_price: {type: Number},
    offer_price: {type: Number},
    Room_type: [Room_typeSchema],
    images: imagesSchema,
    facilities: facilitiesSchema,
    sleepYearly_deals: {type: Boolean},
    Monthly_deals: {type: Boolean},
    Contact: {type: String},
    Hotel_id: {type: Number},
    Promoted: {type: String},
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
