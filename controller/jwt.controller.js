const { User } = require("../models/user.model")
const { jwtSign } = require("../utilities/jwtToken")


//create jwt for login
const createJwt =async (req, res)=>{
    
    const user = await User.findOne({email: req.query.email})
    
    if(user?.email === req.query.email){
        jwtSign(res, req.query)
    }
    else{
        res.status(510).send('Invalid Email')
    }
    
}


exports.createJwt = createJwt