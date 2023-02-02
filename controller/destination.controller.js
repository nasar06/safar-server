const { Destination, DestinationCategory } = require("../models/destinations.models");


const getAllDestination = async (req, res) => {
    try {

        const result = await Destination.find({})
        
        

        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send();
    }
};


const getDestinationCategories = async (req, res) => {
    try {

        const result = await DestinationCategory.find({})
        
        

        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send();
    }
};


const getDestinationCategory = async (req, res) => {
    try {
        console.log(req.params.city)
        Destination.find({'location.city': req.params.city.toUpperCase()}, (err, doc) => {
            if (err) return res.status(500).send(err);
            if (!doc) return res.status(404).send('No document found');
            if(doc){
            res.status(200).send(doc);
            }
          });
    } catch (error) {
        return res.status(400).send('');
    }
};




exports.getAllDestination = getAllDestination;
exports.getDestinationCategories = getDestinationCategories;
exports.getDestinationCategory = getDestinationCategory;

