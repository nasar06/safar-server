const express = require("express");
const { verifyJwt } = require("../controller/jwtToken");
const { userInfo, usersProfile } = require("../controller/user.controller");
const router = express.Router();



router.post('/', userInfo);
router.get('/all-users',verifyJwt, usersProfile);

module.exports = router;