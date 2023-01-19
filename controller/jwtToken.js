const jwt = require("jsonwebtoken")
require('dotenv').config()
const tokenKey = process.env.ACCESS_TOKEN




//create token
const jwtToken = (res, user)=>{

    jwt.sign({user}, tokenKey, {expiresIn: '15d'}, (error, token)=>{
        console.log(tokenKey)
        res.send({token})
    })  
}


//Verify jwt
const jwtVerify = (req, res, next)=>{

    const header = req.headers['authorization']
    if( typeof header !== 'undefined'){
        const headerKey = header.split(' ');
        const token = headerKey[1];
        console.log('inside profile',token)
        req.token = token;
        next()
    }
    else{
        res.send({
            acknowledge: 'false',
            
        })
    }
}


// token verify
const tokenVerify = (req, res)=>{
    jwt.verify(req.token, tokenKey, (err, data)=>{
        if(err){
            res.status(401).send('Invalid Token')
        }
        else{
            res.json({
                acknowledge: 'true'
            })
        }
    })
}


exports.jwtToken = jwtToken;
exports.jwtVerify = jwtVerify;
exports.tokenVerify = tokenVerify;
