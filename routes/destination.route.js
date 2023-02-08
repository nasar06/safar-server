const express = require("express");
const router = express.Router();

const {getAllDestination, getDestinationCategories, getDestinationCategory, hotelDetails, postAllDestination, getSingleRoom} = require('../controller/destination.controller');

router.get('/get-all-destinations', getAllDestination);
router.get('/get-hotel-details/:hotelId', hotelDetails);
router.get('/get-all-destination-categories', getDestinationCategories)
router.get('/get-destination-category/:city', getDestinationCategory)
router.get('/get-room-details/:room_id', getSingleRoom)

router.post('/post-all-destinations', postAllDestination);
module.exports = router;