const express = require("express");
const { getDestinationBySearch } = require("../controller/search-page.controller");
const router = express.Router();


router.get('/location', getDestinationBySearch);

module.exports = router;