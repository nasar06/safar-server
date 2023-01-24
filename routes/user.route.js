const express = require("express");
const { userInfo, usersProfile } = require("../controller/user.controller");
const router = express.Router();



router.post('/', userInfo);
router.get('/all-users', usersProfile);

module.exports = router;