const express = require('express');
const { DestinationCategory } = require('../../controller/destinations/destinations');

const router = express.Router();



router.get('/', async(req, res) => {
    try{
        const result = await DestinationCategory.find({});
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;