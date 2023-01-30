const { Destination } = require("../models/destinations.models")

const getDestinationBySearch = async (req, res)=>{
    
        const query = req.query.location.toUpperCase()
        const result = await Destination.findOne({district: query})
        res.send(result)
    
    
}


exports.getDestinationBySearch = getDestinationBySearch