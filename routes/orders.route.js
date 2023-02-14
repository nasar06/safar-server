const express = require("express");
const { newOrder } = require("../controller/orders.controller");
const router = express.Router();

router.post('/add-order', newOrder)

module.exports = router;