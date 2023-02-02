const { Destination } = require("../models/destinations.models")

const getDestinationBySearch = async (req, res) => {
        const result = await Destination.find({ "location.city": req.query.location.toUpperCase() })
        res.send(result)


}

const getDestinationPrice = async (req, res) => {
       
        const { min, max, ...others } = req.query;
        console.log(min, max, others)
        try {
                const hotels = await Destination.find({'location.city': others.city.toUpperCase(),
                offer_price: { $gt: min || 1, $lt: max || 999 },
                });
                res.status(200).json(hotels);
                
        } catch (err) {
                res.send(err);
                console.log(err);
        }
}


exports.getDestinationBySearch = getDestinationBySearch
exports.getDestinationPrice = getDestinationPrice