const { Mongoose } = require("mongoose");
const { User, Seller } = require("../models/user.model");
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


// Seller post API
const sellerInfo = async (req, res) => {
    try {
        const seller = await Seller.create(req.body);
        res.send(seller);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
};


// all-seller get API
const allSellers = async (req, res) => {
    try{
        const sellers = await Seller.find({});
        res.send(sellers);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}


// Seller update API
const sellerUpdate = async (req, res) => {
    try{
        const email = { email: req.query.email };
        const updateInfo = req.body;
        const result = await Seller.updateMany(email, updateInfo);
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
exports.sellerInfo = sellerInfo;
exports.sellerUpdate = sellerUpdate;
exports.allSellers = allSellers;