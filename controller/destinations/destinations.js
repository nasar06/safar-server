const mongoose = require("mongoose")


// Create a new Mongoose schema 
const destinationSchema = new mongoose.Schema({
    
  });


// Create a Mongoose model from the schema
const Destination_Card = mongoose.model('Destination_card', destinationSchema);


exports.Destination_Card = Destination_Card