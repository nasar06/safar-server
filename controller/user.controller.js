const { Mongoose } = require("mongoose");
const { User, Organizer } = require("../models/user.model");
const { jwtSign } = require("../utilities/jwtToken");



// post API
const userInfo = async (req, res) => {

    const result = await User.create(req.body);
    jwtSign(res, req.body)
};


// get API
const usersProfile = async (req, res) => {

    const result = await User.find({});
    res.send(result);

};


//update API
const userUpdate = async (req, res) => {

    const email = { email: req.query.email }
    const updates = req.body;

    try {
        const user = await User.updateMany(email, updates, { new: true });
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};


// Organizer post API
const organizerInfo = async (req, res) => {
    try {
        const organizer = await Organizer.create(req.body);
        res.send(organizer);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
};


// all-Organizer get API
const allOrganizers = async (req, res) => {
    try{
        const organizers = await Organizer.find({});
        res.send(organizers);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}


// Organizer update API
const organizerUpdate = async (req, res) => {
    try{
        const email = { email: req.query.email };
        const updateInfo = req.body;
        const result = await Organizer.updateMany(email, updateInfo);
        res.send(result);
    }
    catch(err){
        console.error(err);
        res.status(400).send(err);
    }
};

exports.userInfo = userInfo;
exports.usersProfile = usersProfile;
exports.userUpdate = userUpdate;
exports.organizerInfo = organizerInfo;
exports.allOrganizers = allOrganizers;
exports.organizerUpdate = organizerUpdate;
