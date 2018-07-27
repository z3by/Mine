const Profile = require('../../models/Profile');
const validator = require('../../validators/profile');

// GET /profile controller;
module.exports.getProfile = (req, res) => {
	const errors = validator(req.body);

	if (Object.keys(errors).length) {
		return res
			.status(400)
			.json(errors);
	}

	Profile.findOne({ 
		user: req.user.id 
	})
		.then(profile => {
			
			if(!profile) {
				errors.porfile = 'there is no profile for this user';
				
				return res
					.status(404)
					.json(errors);
			} else {

				res.send(profile);  
			}
		})
		.catch(err => {
			res
				.status(404)
				.json(err);
		});
};


// post /profile controller
module.exports.updateProfile = (req, res) => {
	// get the user input
	const fields = req.body;
	// check for errors
	const errors = validator(fields);

	if (Object.keys(errors).length > 0) {
		return res
			.status(400)
			.json(errors);
	}
	
	// set the user id
	fields.user = req.user.id;  
	
	// find it in the database;
	Profile.findOne({
		user: fields.user
	})
		.then(data => {
			
			// create new record if it is not exist;
			if (!data) {
				Profile
					.create(fields)
					
					.then(created => {
						res
							.status(201)
							.json(created);
					})
					.catch(err => console.log(err));
			} else {
				// update the record if exist;
				Profile
					.findOneAndUpdate({
						user: fields.user
					}, fields)
 
					.then(updated => {
						res
							.status(201)
							.json(updated);
					})
 
					.catch(err => console.log(err));
			}
		})
		.catch(err => console.log(err));
};


// get profile by its user id;
module.exports.getProfileByID = (req, res) => {
	Profile.findOne({
		user: req.params.id
	})
		.then(profile => {
			// if there is no profile
			if (!profile) {
				res
					.status(404)
					.json({
						noProfile: 'there is no such profile'
					});
			} else {
				res
					.status(200)
					.json(profile);
			}
		})
		.catch(err => console.log(err));
};




// get profile by its user handle;
module.exports.getProfileByHandle = (req, res) => {
	Profile.findOne({
		handle: req.params.handle
	})
		.then(profile => {
			// if there is no profile
			if (!profile) {
				res
					.status(404)
					.json({
						noProfile: 'there is no such profile'
					});
			} else {
				res
					.status(200)
					.json(profile);
			}
		})
		.catch(err => console.log(err));
};