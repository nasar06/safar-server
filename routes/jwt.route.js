const express = require("express");
const { createJwt } = require("../controller/jwt.controller");
const router = express.Router();



router.get('/', createJwt);

module.exports = router;