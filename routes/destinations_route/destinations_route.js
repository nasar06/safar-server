const express = require('express');
const { Destination } = require('../../controller/destinations/destinations');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const result = await Destination.find({});
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;