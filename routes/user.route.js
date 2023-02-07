const express = require("express");
const { verifyJwt } = require("../utilities/jwtToken");
const { userInfo, usersProfile, userUpdate, sellerInfo, sellerUpdate, allSellers, singleUser } = require("../controller/user.controller");
const router = express.Router();



router.post('/', userInfo);
router.get('/all-users',verifyJwt, usersProfile);
router.get('/get-single-user', singleUser);
router.put('/update-user', userUpdate);

router.post('/seller', sellerInfo);
router.put('/seller-update', sellerUpdate);
router.get('/all-sellers', allSellers);

module.exports = router;