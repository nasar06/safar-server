const express = require("express");
const { getSingleRoom, postRoom, getMyRooms, updateStatus, deactivateRooms } = require("../controller/rooms.controller");
const router = express.Router();


router.get('/get-room-details/:room_id', getSingleRoom)
router.post('/post-room', postRoom)
router.get('/get-all-rooms/:hotel_id', getMyRooms)
router.patch('/deactivate-room/:room', updateStatus)
router.get('/get-deactivate-room', deactivateRooms)

module.exports = router;