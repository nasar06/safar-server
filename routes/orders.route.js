const express = require("express");
const { newOrder, getallOrderbyEmail, getAllOrders } = require("../controller/orders.controller");
const router = express.Router();

router.post('/add-order', newOrder)
router.get('/get-order-byEmail', getallOrderbyEmail)
router.get('/get-all-orders', getAllOrders)

module.exports = router;