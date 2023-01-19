const express = require('express');
const { Destination_Card } = require('../../controller/destinations/destinations');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const result = await Destination_Card.find({});
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;