const validator = require('validator');
const isEmpty = require('./isEmpty');
const strongPassword = require('./isStrongPassword');

const validateRegisterInput = (data) => {
	let errors = {};
	
	const inputUsername = !isEmpty(data.username) ? data.username : '';
	const inputPassword = !isEmpty(data.password) ? data.password : '';
	const inputPasswordConfirm = !isEmpty(data.password2) ? data.password2 : '';
	const inputEmail = !isEmpty(data.email) ? data.email : '';
	


	// check if the user name is short;
	if (!validator.isLength(inputUsername, {min: 2, max: 30})) {
		errors.username = 'the user name must be between 2 and 30 characters';
	}
	
	// check if the user name is empty;
	if (validator.isEmpty(inputUsername)) {
		errors.username = 'the user name is required';
	}

 

	// check if the password is empty;
	if (validator.isEmpty(inputPassword)) {
		errors.password = 'password is required';
	}

	// check if the confirm password is empty;
	if (validator.isEmpty(inputPasswordConfirm)) {
		errors.passwordConfirm = 'confirm your password';
	}
	
	// check if the confirm password is empty;
	if (!validator.equals(inputPassword, inputPasswordConfirm)) {
		errors.passwordConfirm = 'passwords doesn\'t match';
	}

	// check if the email is empty;
	if (validator.isEmpty(inputEmail)) {
		errors.email = 'email is required';
	}

	//check if the password is invaild
	const inValidPassword = validator.isLength(inputPassword, {min: 6, max: 30});
	if (!inValidPassword) {
		errors.password = 'password must be at least 6 characters';
	}

	// check if the email is invalid
	if (!validator.isEmail(inputEmail)) {
		errors.email = 'email is invalid';
	}

	// check if the password is strong enough;
	if (!strongPassword.validate(inputPassword)) {
		const errorsArray = strongPassword.validate(inputPassword, { list: true });
		
		// check if the password contains spaces;
		if (errorsArray.includes('spaces')) {
			errors.password = 'the password can not contain spaces';
		}

		// check if the password contains numbers;
		if (errorsArray.includes('digits')) {
			errors.password = 'the password must contain at least one number';
		}

		// check if the password contains uppercase;
		if (errorsArray.includes('uppercase')) {
			errors.password = 'the password must contain at least one uppercase character';
		}

		// check if the password contains lowercase;
		if (errorsArray.includes('lowercase')) {
			errors.password = 'the password must contain at least one lowercase character';
		}

	}
	return errors;
};

module.exports = validateRegisterInput;
