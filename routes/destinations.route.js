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
router.get('/category/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const result = await Destination.findOne({category_id: id});
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
})


