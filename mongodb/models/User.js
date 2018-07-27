const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define the user model
const UserSchema = Schema({
	username: {
		required: true,
		type: String,
	},
	email: {
		required: true,
		type: String,
		unique: true
	},
	password: {
		required: true,
		type: String,
	},
	avatar: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
