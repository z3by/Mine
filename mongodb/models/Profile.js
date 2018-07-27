const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define the user model
const ProfileSchema = Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	firstname: {
		required: true,
		type: String,
	},
	lastname: {
		required: true,
		type: String,
	},
	handle: {
		required: true,
		type: String,
		max: 40,
	},
	country: String,
	city: String,
	status: String,
	bio: String,
	job: String,
	links: {
		youtube: {
			type: String
		},
		facebook: {
			type: String
		},
		twitter: {
			type: String
		},
		instagram: {
			type: String
		},
		linkedin: {
			type: String
		},
		googleplus: {
			type: String
		}
	},
	phone1: String,
	phone2: String,
	date: {
		type: Date,
		default: Date.now
	}

});

const Profile = mongoose.model('profiles', ProfileSchema);
module.exports = Profile;