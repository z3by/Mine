const bcrypt = require('bcrypt');
const UserAuthModel = require('../../../mongodb/models/UserAuth');
const config = require('../../../config/_config');
const mongoose = require('mongoose');

// add new user to the database;
module.exports.signUpNewUser = (user, cb) => {
// this function just hashes the password;
	bcrypt.genSalt(config.saltRounds, function(err, salt) {
		bcrypt.hash(user['password'], salt, function(err, hash) {
			if (err) {
				cb(err);
			} else {
				// save the user info after hashing the password;
				user.password = hash;
				UserAuthModel.create(user, (err, createdUser) => {
					if (err) {
						cosnole.log(err);
						cb(err);
					} else {
						cb(createdUser);
					}
				});
			}
		});
  	});

};


module.exports.login = (user, cb) => {
	const userInputPassword = user.password;
	const userInputEmail = user.email;
	// search for the user input in the database;
	UserAuthModel.findOne({
		email: userInputEmail
	}, (err, found) => {
		if (err) {
			cb(err);
		} else {
			// if the user is not founded;
			if (!found) {
				cb('user not found');
			} else {
				bcrypt.compare(userInputPassword, found.password, (err, match) => {
					if (err) {
						cb(err);
					} else {
						cb(found);
					}
				});
			}
		};
	});
};
