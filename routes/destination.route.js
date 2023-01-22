const express = require("express");
const router = express.Router();

const {getAllDestination, getDestinationCategories, getDestinationCategory} = require('../controller/destination.controller');

router.get('/get-all-destinations', getAllDestination);
router.get('/get-all-destination-categories', getDestinationCategories)
router.get('/get-destination-category/:id', getDestinationCategory)

module.exports = router;