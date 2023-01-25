const { User } = require("../models/user.model");
const { jwtSign } = require("./jwtToken");



// post API
const userInfo = async (req, res) => {
    const result = await User.create(req.body);
    res.send(result);
    jwtSign(res, req.body)
}


// get API
const usersProfile = async (req, res) => {

    const result = await User.find({});
            res.send(result);

}

exports.userInfo = userInfo;
exports.usersProfile = usersProfile;