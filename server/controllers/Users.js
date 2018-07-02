const UserModel = require('../../mongodb/models/UserAuth');
const userHelpers = require('../../mongodb/helpers/userHelpers');

exports.sign_up = (req, res) => {
	const user = req.body.user;
	
	// sign up new user;
	userHelpers.signUpNewUser(user, (err, user) => {
		err ?
			res.sendStatus(404)
			:res.status(201)
				.send(user);
	});
};
