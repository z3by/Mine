const mongoose = require('mongoose');


// degine the user information schema;
const userInfo = mongoose.Schema({
	name: String,
	country: String,
	birthday: Date,
	phone: Number,
	city: String,
	job: String
});


// define the user info medel;
exports.UserInfo = mongoose.model('UserInfo', userInfo);
