const express = require("express");
const { getSingleRoom } = require("../controller/rooms.controller");
const router = express.Router();


router.get('/get-room-details/:room_id', getSingleRoom)

module.exports = router;