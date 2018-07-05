const mongoose = require('mongoose');

// define the user auth schema;
const userSchema = mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		unique: true,
		required: true
	}
});


// define the mongoose model;
module.exports = mongoose.model('UserAuth', userSchema);