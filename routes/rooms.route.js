const express = require("express");
const { getSingleRoom, postRoom, getMyRooms, updateStatusDeactivate, deactivateRooms, deleteRoom, getDeletingRoom, updateStatusActive } = require("../controller/rooms.controller");
const router = express.Router();


router.get('/get-room-details/:room_id', getSingleRoom)
router.post('/post-room', postRoom)
router.get('/get-all-rooms/:hotel_id', getMyRooms)

//dashboard
router.patch('/deactivate-room/:room', updateStatusDeactivate)
router.patch('/active-room/:room', updateStatusActive)
router.get('/get-deactivate-room/:hotel_id', deactivateRooms)
router.delete('/delete-room/:room_no', deleteRoom)
router.get('/get-delete-room/:hotel_id', getDeletingRoom)

module.exports = router;