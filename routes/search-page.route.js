const express = require("express");
const { getDestinationBySearch, getDestinationPrice } = require("../controller/search-page.controller");
const router = express.Router();


router.get('/location', getDestinationBySearch);
router.get('/hotels', getDestinationPrice);

module.exports = router;