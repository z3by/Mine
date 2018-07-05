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

