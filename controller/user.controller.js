const { User } = require("../models/user.model");


const userInfo = async (req, res)=>{
    const result = await User.create(req.body)
    res.send(result)
}

exports.userInfo = userInfo;