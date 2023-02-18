const mongoose = require("mongoose")


//--------- Create a new Mongoose schema -----------//
//Destinations Schema
//--
const Room_typeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rooms_no: {
        type: Number,
        required: true
    },
    sleep: {
        type: Number,
        required: true
    },
    price: {
        type: String,

    },
    bed: [{
        size: { type: String }
    }]
});

//---
const locationSchema = new mongoose.Schema({
    country: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    zip_code: {
        type: String
    }
});
//----
const imagesSchema = new mongoose.Schema({
    url: {
        type: String
    },
})
//---
const facilitiesSchema = new mongoose.Schema({
    name: {
        type: String
    },
})
const img = new mongoose.Schema({ 
    type: String
})



//main
const destinationSchema = new mongoose.Schema({
    hotel_name: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    organizer_email: {
        type: String
    },
    offer: {
        type: Boolean
    },

    location: [locationSchema],
    images: [{type: String}],

    facilities: [
        facilitiesSchema
    ],
    room_type: [
        Room_typeSchema
    ],
    yearly_deals: {
        type: Boolean
    },
    monthly_deals: {
        type: Boolean
    },
    contact: {
        type: String
    },
    hotel_id: {
        type: String
    },
    promoted: {
        type: String
    },
    profile_img: {
        type: String
    },
})

//destination Categories schema
const destinationCategoriesSchema = new mongoose.Schema({
    city: {
        type: String
    },
    spots: {
        type: String
    },
    img: {
        type: String
    }
});


//--------Create a Mongoose model from the schema-------//
//Destinations Model
const Destination = mongoose.model('Destination', destinationSchema);
//destination Categories Model
const DestinationCategory = mongoose.model('DestinationCategory', destinationCategoriesSchema);





 
//export Models
exports.DestinationCategory = DestinationCategory
exports.Destination = Destination

