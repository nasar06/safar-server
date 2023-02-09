const express = require("express");
const { getSingleRoom, postRoom } = require("../controller/rooms.controller");
const router = express.Router();


router.get('/get-room-details/:room_id', getSingleRoom)
router.post('/post-room', postRoom)

module.exports = router;