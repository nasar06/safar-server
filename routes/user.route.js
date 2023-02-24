const express = require("express");
const { verifyJwt } = require("../utilities/jwtToken");
const { userInfo, usersProfile,singleUser, userUpdate, organizerInfo, organizerUpdate, allOrganizers, guideInfo, allGuides, guideUpdate, getSingleOrganizer, singleGuide } = require("../controller/user.controller");
const router = express.Router();



router.post('/', userInfo);
router.get('/all-users', usersProfile);
router.get('/get-single-user', singleUser);
router.put('/update-user', userUpdate);

router.post('/organizer', organizerInfo);
router.put('/organizer-update', organizerUpdate);
router.get('/all-organizers', allOrganizers);
router.get('/get-single-organizer', getSingleOrganizer);

router.post('/guide', guideInfo);
router.get('/all-guides', allGuides);
router.get('/single-guide/:id', singleGuide);
router.put('/update-guide', guideUpdate);

module.exports = router;