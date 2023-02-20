const express = require("express");
const { paymentIntent } = require("../controller/payment.controller");
const router = express.Router();

router.post('/paymentIntent', paymentIntent)

module.exports = router;