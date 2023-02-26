const express = require("express");
const { newOrder, getallOrderbyEmail, getAllOrders, updatePayOrder } = require("../controller/orders.controller");
const router = express.Router();

router.post('/add-order', newOrder)
router.get('/get-order-byEmail', getallOrderbyEmail)
router.get('/get-all-orders', getAllOrders)
router.put('/update-order', updatePayOrder)

module.exports = router;