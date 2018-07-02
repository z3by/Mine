const bcrypt = require('bcrypt');
const UserAuthModel = require('../models/UserAuth');
const config = require('../../config/_config');


// add new user to the database;
module.exports.signUpNewUser = (user, cb) => {
	// hash the user password;
	user = hasher(user);
	UserAuthModel.create(user, (err, user) => {
	  if(err) {
			cb(err, null);
	  } else {
			cb(null, user);
	  }
	});
};

// hash the password 
const hasher = (user) => {
	bcrypt.genSalt(config.saltRounds, function(err, salt) {
		bcrypt.hash(user.pasword, salt, function(err, hash) {
			user['pasword'] = hash;
			return user;
		});
	});
};
