const express = require("express");
const router = new express.Router();
const { subscribeMail } = require("../controller/subscriber.controller");


// send mail
router.post("/send-email", subscribeMail )

module.exports = router;