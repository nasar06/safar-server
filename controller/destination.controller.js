const { Destination, DestinationCategory } = require("../models/destinations.models");
const { Rooms } = require("../models/rooms.model");

//get all hotels
const getAllDestination = async (req, res) => {
    try {
        const result = await Destination.find({})
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send();
    }
};

//get single hotel details
const hotelDetails = async (req, res) => {
    try {
        console.log(req.params.hotelId)
        const id = req.params.hotelId
        const hotel = await Destination.findOne({hotel_id: id })
        res.send(hotel)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

//get all catagories
const getDestinationCategories = async (req, res) => {
    try {
        const result = await DestinationCategory.find({})
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send();
    }
};

//get single category
const getDestinationCategory = async (req, res) => {
    try {
        console.log(req.params.city)
        Destination.find({ 'location.city': req.params.city.toUpperCase() }, (err, doc) => {
            if (err) return res.status(500).send(err);
            if (!doc) return res.status(404).send('No document found');
            if (doc) {
                res.status(200).send(doc);
            }
        });
    } catch (error) {
        return res.status(400).send('');
    }
};

/////-------------------Post------------------//////

//post all destinations
const postAllDestination =async (req, res) =>{
    try{
        const newRoom = req.body
       const result = await Destination.create(newRoom);
       res.send({acknowledge: true, result})
       
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}



exports.getAllDestination = getAllDestination;
exports.hotelDetails = hotelDetails;
exports.getDestinationCategories = getDestinationCategories;
exports.getDestinationCategory = getDestinationCategory;
exports.postAllDestination = postAllDestination;

