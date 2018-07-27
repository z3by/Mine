const validator = require('validator');

const validateLoginInput = (data) => {
	let errors = {};
	
	const inputEmail = data.email;
	const inputPassword = data.password;
	console.log(inputEmail, inputPassword);
 
	// check if the password is empty;
	if (validator.isEmpty(inputPassword)) {
		errors.password = 'password is required';
	}

	
	// check if the email is empty;
	if (validator.isEmpty(inputEmail)) {
		errors.email = 'email is required';
	}

	return errors;
};

module.exports = validateLoginInput;
