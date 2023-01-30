const mongoose = require("mongoose")


//--------- Create a new Mongoose schema -----------//
//Destinations Schema
const destinationSchema = new mongoose.Schema({
    category_id : {type: String},
    district: {
        type: String,
      }
    
});
//destination Categories schema
const destinationCategoriesSchema = new mongoose.Schema({
    category_id : {type: String}
});



//--------Create a Mongoose model from the schema-------//
//Destinations Model
const Destination = mongoose.model('Destination', destinationSchema);
//destination Categories Model
const DestinationCategory = mongoose.model('DestinationCategory', destinationCategoriesSchema);





//export Models
exports.DestinationCategory = DestinationCategory
exports.Destination = Destination
