const { User } = require("../models/user.model");

// post API
const userInfo = async (req, res) => {
    const result = await User.create(req.body);
    res.send(result);
}


// get API
const usersProfile = async (req, res) => {
    const result = await User.find({});
    res.send(result);
}

exports.userInfo = userInfo;
exports.usersProfile = usersProfile;