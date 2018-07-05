const express = require('express');
const router = express.Router();
const UsersCtrl = require('../controllers/Users');



// handle the sign up requests;
router.post('/signup', UsersCtrl.sign_up);


// handle the login route;
router.post('/login', UsersCtrl.log_in);


module.exports = router;
