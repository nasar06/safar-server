const express = require("express");
const { getSingleRoom, postRoom, getMyRooms } = require("../controller/rooms.controller");
const router = express.Router();


router.get('/get-room-details/:room_id', getSingleRoom)
router.post('/post-room', postRoom)
router.get('/get-all-rooms/:hotel_id', getMyRooms)

module.exports = router;