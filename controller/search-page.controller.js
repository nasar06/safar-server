const { Destination } = require("../models/destinations.models")

const getDestinationBySearch = async (req, res) => {
        const result = await Destination.findOne({ city: req.query.location.toUpperCase() })
        res.send(result)
}

const getDestinationPrice = async (req, res) => {
        try {
                const { min, max, ...others } = req.query;
                const result = await Destination.find({ offer_price: { $gt: min || 1, $lt: max || 999 }, 'location.city': others.city.toUpperCase() });
                res.send(result);
        }
        catch (err) {
                res.send(err);
        }
}


exports.getDestinationBySearch = getDestinationBySearch
exports.getDestinationPrice = getDestinationPrice