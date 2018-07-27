// modules imports
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/usersCtrl');



/*
routes handlers ----------------------------------
*/

/* GET users listing. */
router.get('/', function(req, res) {
	res.send('users');
});


// @route    /users/register 
// @desc     sign up for new user
router.post('/register', controllers.signUp);


// @route    /users/login
// @desc     log in for given user info
router.post('/login', controllers.login);




module.exports = router;
