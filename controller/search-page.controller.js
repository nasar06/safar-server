const { Destination } = require("../models/destinations.models")
const { SearchLocation } = require("../models/search-page.model")


const getDestinationBySearch = async (req, res)=>{
    
    try{
        const result = await Destination.findOne({district: req.query.location})
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
}


exports.getDestinationBySearch = getDestinationBySearch