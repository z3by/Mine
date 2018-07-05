const bcrypt = require('bcrypt');
const UserAuthModel = require('../../../mongodb/models/UserAuth');
const config = require('../../../config/_config');
const mongoose = require('mongoose');

// add new user to the database;
module.exports.signUpNewUser = (user, cb) => {
	// hash the user password;
	const password = user.password;
	const modelInstance = new UserAuthModel(userHashed);

	modelInstance.save((err, createdUser) => {
		if(err) {
			cb(err);
		} else {
			cb(null, createdUser);
		}
	});
};

// hash the password 
const hasher = (password) => {
	bcrypt.genSalt(config.saltRounds, function(err, salt) {
		bcrypt.hash(password, salt, function(err, hash) {
			return hash;
		});
  	});
};
