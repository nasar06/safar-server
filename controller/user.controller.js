const { Mongoose } = require("mongoose");
const { User } = require("../models/user.model");
const { jwtSign } = require("../utilities/jwtToken");



// post API
const userInfo = async (req, res) => {

    const result = await User.create(req.body);
    jwtSign(res, req.body)
}


// get API
const usersProfile = async (req, res) => {

    const result = await User.find({});
    res.send(result);

}

//update API
const userUpdate = async (req, res) => {

    const email = {email: req.query.email}
    const updates = req.body;

    try {
        const user = await User.updateMany(email, updates, { new: true });
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.userInfo = userInfo;
exports.usersProfile = usersProfile;
exports.userUpdate = userUpdate;