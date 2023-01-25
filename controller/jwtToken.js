const jwt = require("jsonwebtoken")
require('dotenv').config()
const tokenKey = process.env.ACCESS_TOKEN



//create token
const jwtSign = (res, user)=>{

    jwt.sign({user}, tokenKey, {expiresIn: '15d'}, (error, token)=>{
        console.log(token)
        res.send({token})
    })  
}


//verify jwt
function verifyJwt(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('unauthorize access-->')
    }

    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(403).send('forbidden access-->')
        }
        req.decoded = decoded
        next()
    })
}



exports.jwtSign = jwtSign;
exports.verifyJwt = verifyJwt;

