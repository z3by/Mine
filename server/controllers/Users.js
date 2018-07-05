const UserModel = require('../../mongodb/models/UserAuth');
const userHelpers = require('./helpers/userHelpers');

exports.sign_up = (req, res) => {
	// extract the user input from the request;
	const user = req.body;

	// sign up new user;
	userHelpers.signUpNewUser(user, (err, userInfo) => {
		err ?
			res.sendStatus(404)
			:res.status(201)
				.send(userInfo);
	});
};
