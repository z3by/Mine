const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('../../config/keys');

// load input validators;
const registerValidator = require('../../validators/register');
const loginValidator = require('../../validators/login');


// sign up new user controller;
module.exports.signUp =  (req, res) => {
	
	// validate user input;
	const errors = registerValidator(req.body);
	const isValid = Object.keys(errors).length === 0;
	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ 
		email: req.body.email 
	}).then(user => {
		if (user) {
			errors.email = 'this email is already exist';
			res.status(400).json(errors);
		} else {
			const avatar = gravatar.url(req.body.email, {
				s: '200',
				r: 'pg',
				d: 'mm' 
			});
	
			const newUser = new User({
				username: req.body.username,
				email: req.body.email,
				avatar,
				password: req.body.password
			});
	
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then(user => {
							res.json(user);
						})
						.catch(err => console.log(err));
				});
			});
		}
	});
};




// log in conrtoller
module.exports.login = (req, res) => {
	// validate user input;
	const errors = loginValidator(req.body);
	const isValid = Object.keys(errors).length === 0;
	 
	if (!isValid) {
		return res.status(400).json(errors);
	}
 
	
	const email = req.body.email;
	const password = req.body.password;

	User.findOne({ 
		email: email 
	})
		.then(user => {
			if (!user) {
				res.status(404).json({
					email: 'user Not found'
				});
			} else {
				bcrypt.compare(password, user.password)
					.then(match => {
						if (match) {
							// create json web token;
							const payload = { id: user.id, email: user.email, avatar: user.avatar };
							jwt.sign(
								payload, 
								config.secret, 
								{ expiresIn: 5000 }, 
								(err, token) => {
									if (err) {
										console.log(err);
									} else {
										res.json({
											success: true,
											token: `Bearer ${token}`,
										});
									}
								});
						} else {
							res.status(403).json({
								password: 'password is wrong'
							});
						}
					})
					.catch(err => console.log(err));
			}
		})
		.catch(err => console.log(err));
};
