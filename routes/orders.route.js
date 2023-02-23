const express = require("express");
const { newOrder, getallOrderbyEmail } = require("../controller/orders.controller");
const router = express.Router();

router.post('/add-order', newOrder)
router.get('/get-order-byEmail', getallOrderbyEmail)

module.exports = router;