const { Destination } = require("../models/destinations.models")

const getDestinationBySearch = async (req, res) => {
        const result = await Destination.findOne({ "location.city": req.query.location.toUpperCase() })
        res.send(result)


}

const getDestinationPrice = async (req, res) => {
       
        const { min, max, ...others } = req.query;
        console.log(min, max, others)
        try {
                const hotels = await Destination.find({'location.city': others.city,
                offer_price: { $gt: min || 1, $lt: max || 999 },
                }).limit(req.query.limit);
                res.status(200).json(hotels);
        } catch (err) {
                res.send(err);
                console.log(err);
        }
}


exports.getDestinationBySearch = getDestinationBySearch
exports.getDestinationPrice = getDestinationPrice