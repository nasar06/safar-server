const mongoose = require("mongoose")


// Create a new Mongoose schema 
const destinationSchema = new mongoose.Schema({
    
  });


// Create a Mongoose model from the schema
const Destination = mongoose.model('Destination', destinationSchema);


exports.Destination = Destination