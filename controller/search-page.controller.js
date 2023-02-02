const { Destination } = require("../models/destinations.models")

const getDestinationBySearch = async (req, res) => {
        const result = await Destination.findOne({ city: req.query.location.toUpperCase() })
        res.send(result)


}


exports.getDestinationBySearch = getDestinationBySearch