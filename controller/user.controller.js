const { Mongoose } = require("mongoose");
const { User, Organizer, Guide } = require("../models/user.model");
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

//get API single user
const singleUser = async(req, res)=>{
    console.log(req.query.email)
    try{
        const result =await User.findOne({email: req.query.email});
        res.send(result);
    }
    catch(err){
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
        res.status(400).send('error',error);
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
    try{
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


// Guide post API
const guideInfo = async (req, res) => {
    try{
        const guide = await Guide.create(req?.body);
        res.send(guide);
    }
    catch(err){
        console.error(err);
        res.status(400).send(err);
    }
}

exports.userInfo = userInfo;
exports.usersProfile = usersProfile;
exports.userUpdate = userUpdate;
exports.singleUser = singleUser;
exports.organizerInfo = organizerInfo;
exports.organizerUpdate = organizerUpdate;
exports.allOrganizers = allOrganizers;
exports.guideInfo = guideInfo;