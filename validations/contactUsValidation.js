import validator from 'validator';

function validateContactUs(data) {
    const errors = {};

    if (validator.isEmpty(data.name)) errors.name = 'Please enter the name.';

    if (validator.isEmpty(data.email)) errors.email = 'Please enter the email.';
    else if(!validator.isEmail(data.email)) errors.email = 'Please enter valid email'

    return { errors, isValid: Object.keys(errors).length <= 0 };
}

export default validateContactUs;

