const express = require("express");
const { addOrders } = require("../controller/orders.controller");
const router = express.Router();

router.post('/add-order', addOrders)

module.exports = router;