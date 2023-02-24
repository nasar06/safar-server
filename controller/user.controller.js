// const { Mongoose } = require("mongoose");
const { User, Organizer, Guide } = require("../models/user.model");
const { jwtSign } = require("../utilities/jwtToken");
const { ObjectId } = require('mongodb')



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

//get API single user
const singleUser = async (req, res) => {
    console.log(req.query.email)
    try {
        const result = await User.findOne({ email: req.query.email });
        res.send(result);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}


//user update API
const userUpdate = async (req, res) => {

    const email = { email: req.query.email }
    const updates = req.body;

    try {
        const user = await User.updateMany(email, updates, { new: true });
        res.send(user);
    } catch (error) {
        res.status(400).send('error', error);
    }
};


// Organizer post API
const organizerInfo = async (req, res) => {
    try {
        const seller = await Organizer.create(req.body);
        res.send(seller);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
};


// all-Organizer get API
const allOrganizers = async (req, res) => {
    try {
        const sellers = await Organizer.find({});
        res.send(sellers);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}


// Organizer update API
const organizerUpdate = async (req, res) => {
    try {
        const email = { email: req.query.email };
        const updateInfo = req.body;
        const result = await Organizer.updateMany(email, updateInfo);
        res.send(result);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
};

//get single Organizer
const getSingleOrganizer = async (req, res) => {
    try {
        console.log(req.query.email)
        const result = await Organizer.findOne({ email: req.query.email })
        res.send(result)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}


// Guide post API
const guideInfo = async (req, res) => {
    try {
        const guide = await Guide.create(req?.body);
        res.send(guide);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
};


// get all guides API
const allGuides = async (req, res) => {
    try {
        const guides = await Guide.find({});
        res.send(guides);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
};


// Guide Update API
const guideUpdate = async (req, res) => {
    try {
        const email = { email: req?.query.email };
        const updateData = req?.body;

        const result = await Guide.updateMany(email, updateData);
        res.send(result);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
};


// get specific guide by id
const singleGuide = async (req, res) => {
    try {
        const singleGuide = await Guide.findById(req.params.id);
        res.send(singleGuide);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}

//user
exports.userInfo = userInfo;
exports.usersProfile = usersProfile;
exports.userUpdate = userUpdate;
exports.singleUser = singleUser;

//organizer
exports.organizerInfo = organizerInfo;
exports.organizerUpdate = organizerUpdate;
exports.allOrganizers = allOrganizers;
exports.getSingleOrganizer = getSingleOrganizer;

//guide
exports.guideInfo = guideInfo;
exports.allGuides = allGuides;
exports.guideUpdate = guideUpdate;
exports.singleGuide = singleGuide;