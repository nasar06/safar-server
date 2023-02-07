const express = require("express");
const { verifyJwt } = require("../utilities/jwtToken");
const { userInfo, usersProfile, userUpdate, organizerInfo, organizerUpdate, allOrganizers } = require("../controller/user.controller");
const router = express.Router();



router.post('/', userInfo);
router.get('/all-users',verifyJwt, usersProfile);
router.put('/update-user', userUpdate);

router.post('/organizer', organizerInfo);
router.put('/organizer-update', organizerUpdate);
router.get('/all-organizers', allOrganizers);

module.exports = router;