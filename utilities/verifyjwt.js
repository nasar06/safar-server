const express = require('express')
const { tokenVerify, jwtVerify } = require('../controller/jwtToken')
const router = express.Router()


// verify jwt--------------------------------------------//
router.post('/', jwtVerify, (req, res)=>{

    tokenVerify(req, res)
})


module.exports = router