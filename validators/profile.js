const validator = require('validator');

const validateProfile = (data) => {
	let errors = {};
	// validate the main fields
	for (const field in data) {

		if (field === 'links') {
			validateLinks(data.links, errors);
		} else {
			
			if (validator.isEmpty(data[field])) {
				errors[field] = `${ field } can not be empty`;
			}
		}
	}

	return errors;
};


// helper function to shorten ^ this function;
const validateLinks = (links, errors) => {
	// validate the links fields
	for (const field in links) {
		// check if the user input is not empty
		if (validator.isEmpty(links[field])) {
			errors[field] = `${ field } can not be empty`;
		}
		
		// check if the URLs is valid
		if (!validator.isURL(links[field])) {
			errors[field] = `${ field } is not valid URL`;
		}
	}
};
module.exports = validateProfile;
