const express = require('express');
const { Destination, DestinationCategory } = require('../models/destinations');
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

router.get('/categories', async(req, res) => {
    try{
        const result = await DestinationCategory.find({});
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
})



module.exports = router;