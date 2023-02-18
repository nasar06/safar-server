const { Destination, DestinationCategory } = require("../models/destinations.models");
const { Organizer } = require("../models/user.model");
const mongoose = require("mongoose")

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
        const hotel = await Destination.findOne({ hotel_id: id })
        res.send(hotel)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}
//get single hotel details By Email[sellerProfile]
const hotelDetailsByEmail = async (req, res) => {
    try {
        const email = req.query.email
        const hotel = await Destination.findOne({ organizer_email: email })
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

//utilities for organizer
const setDataOrganizer =async (req, res, next) => {
    try {
        const organizer = await Organizer.findOneAndUpdate(
            { email: req.body.organizer_email }, // find the organizer using the email field

            {
                $set: {
                    hotel_id: req.body.hotel_id,
                    hotel_name: req.body.hotel_name,
                    contact: req.body.contact,
                }

            }, //$set// update the contact field with the new value using $set operator
            //$push// add the new hotel to the hotels array using $push operator
            { new: true } // return the updated document
        );

        if (!organizer) {
            return res.status(404).send({ message: 'Organizer not found' });
        }

        console.log(organizer);
        res.send('Success');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
    next()
}

/////-------------------Post------------------//////

//post all destinations and set organizer data
const postAllDestination = async (req, res) => {

    const result = await Destination.create(req.body);
    res.send({ acknowledge: true, result })
}



exports.getAllDestination = getAllDestination;
exports.hotelDetails = hotelDetails;
exports.getDestinationCategories = getDestinationCategories;
exports.getDestinationCategory = getDestinationCategory;
exports.postAllDestination = postAllDestination;
exports.hotelDetailsByEmail = hotelDetailsByEmail;
exports.setDataOrganizer = setDataOrganizer;

