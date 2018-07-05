const express = require('express');
const router = express.Router();
const UsersCtrl = require('../controllers/Users');



// handle the sign up requests;
router.post('/signup', UsersCtrl.sign_up);

module.exports = router;
