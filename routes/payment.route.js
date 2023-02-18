const express = require("express");
const { paymentIntent } = require("../controller/payment.controller");
const router = express.Router();

router.post('/pay', paymentIntent)

module.exports = router;