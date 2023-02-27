const express = require("express");
const router = express.Router();

const {getAllDestination, getDestinationCategories, getDestinationCategory, hotelDetails, postAllDestination, hotelDetailsByEmail, setDataOrganizer} = require('../controller/destination.controller');

router.get('/get-all-destinations', getAllDestination);
router.get('/get-hotel-details/:hotelId', hotelDetails);
router.get('/get-hotel-details/', hotelDetailsByEmail);
router.get('/get-all-destination-categories', getDestinationCategories)
router.get('/get-destination-category/:city', getDestinationCategory);


router.post('/post-all-destinations', setDataOrganizer, postAllDestination);
module.exports = router;