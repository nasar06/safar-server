const express = require("express");
const { verifyJwt } = require("../utilities/jwtToken");
<<<<<<< HEAD
const { userInfo, usersProfile, userUpdate, sellerInfo, sellerUpdate, allSellers, singleUser } = require("../controller/user.controller");
=======
const { userInfo, usersProfile, userUpdate, organizerInfo, organizerUpdate, allOrganizers } = require("../controller/user.controller");
>>>>>>> 8d43a05390f1cfc3a2ab853b32e1cb515a433685
const router = express.Router();



router.post('/', userInfo);
router.get('/all-users',verifyJwt, usersProfile);
router.get('/get-single-user', singleUser);
router.put('/update-user', userUpdate);

router.post('/organizer', organizerInfo);
router.put('/organizer-update', organizerUpdate);
router.get('/all-organizers', allOrganizers);

module.exports = router;