const mongoose = require('mongoose');

// define the user auth schema;
const userSchema = mongoose.Schema({
	email: String,
	password: String,
});


// define the mongoose model;
exports = mongoose.model('UserAuth', userSchema);