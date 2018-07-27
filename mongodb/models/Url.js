const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define the user model
const UrlSchema = Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	text: String,
	avatar: String,
	name: String,
	likes: [String],
	comments: [{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'users'
		},
		text: String,
		category: String,
		date: {
			type: Date,
			default: Date.now
		}
	}],
	date: {
		type: Date,
		default: Date.now
	}
});

const Url = mongoose.model('urls', UrlSchema);
module.exports = Url;