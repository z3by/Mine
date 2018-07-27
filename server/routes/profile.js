const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileCtrl');

// @route   GET /profile
// @desc     respond with the current user profile
router.get('/', profileController.getProfile);



// @route   POST /profile
// @desc     update the current user profile
router.post('/', profileController.updateProfile);



// @route   GET /profile/:handle
// @desc     retrieve profile by its handle;
router.get('/:handle', profileController.getProfileByHandle);



// @route   GET /profile/:id
// @desc     retrieve profile by the user id;
router.get('/:id', profileController.getProfileByID);


module.exports = router;
