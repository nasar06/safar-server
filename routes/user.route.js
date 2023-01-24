const express = require("express");
const { userInfo } = require("../controller/user.controller");
const router = express.Router();



router.post('/', userInfo);

module.exports = router;