const express = require('express')
const { jwtToken } = require('../controller/jwtToken')
const router = express.Router()

router.post('/', (req, res)=>{
    const user = {
        name: 'nasar',
        email: 'nasar8533@gmail.com'
    }
    jwtToken(res, user)
})

module.exports = router