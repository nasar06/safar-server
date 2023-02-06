const express = require("express");
const { verifyJwt } = require("../utilities/jwtToken");
const { userInfo, usersProfile, userUpdate, sellerInfo, sellerUpdate } = require("../controller/user.controller");
const router = express.Router();



router.post('/', userInfo);
router.get('/all-users',verifyJwt, usersProfile);
router.put('/update-user', userUpdate);

router.post('/seller', sellerInfo);
router.put('/seller-update', sellerUpdate);

module.exports = router;