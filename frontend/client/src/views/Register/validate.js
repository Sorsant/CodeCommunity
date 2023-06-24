const validate = (register) => {
    let errors = {};

    if (!/\S+@\S+\.\S+/.test(register.email)) {
        errors.email = 'It must be an email with @ and .com';
    }

    if (register.email.length > 25) {
        errors.email = 'Must be under 25';
    }

    if (register.email === '') {
        errors.email = 'Email is required';
    }

    if (register.username === '') {
        errors.username = 'Username is required';
    }

    if (register.username.length < 4) {
        errors.username = 'Must be greater than 4 digits';
    }

    if (register.username.length > 10) {
        errors.username = 'Must be less than 10 digits';
    }

    if (register.password.length < 6) {
        errors.password = 'Must be greater than 6 characters';
    } else if (register.password.length > 10) {
        errors.password = 'Must be less than 10 characters';
    }

    if (!/\d/.test(register.password)) {
        errors.password = 'Must have at least one numeric character';
    }
    if (register.password === register.confirmpassword) {
        errors.confirmpassword = 'Passwords do not match';
    }
    return errors;
};

export default validate;
