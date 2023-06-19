const validate = (register: {
    email: string;
    password: string;
    nickname: string;
    name: string;
    lastname: string;
}): {
    email?: string;
    password?: string;
    nickname?: string;
    name?: string;
    lastname?: string;
} => {
    let errors: {
        email?: string;
        password?: string;
        nickname?: string;
        name?: string;
        lastname?: string;
    } = {};

    if (!/\S+@\S+\.\S+/.test(register.email)) {
        errors.email = 'It must be an email with @ and .com';
    }

    if (register.email.length > 25) {
        errors.email = 'Must be under 35';
    }
    if (register.email === '') {
        errors.email = 'Email is required';
    }
    if (register.nickname === '') {
        errors.nickname = 'account is required';
    }
    if (register.nickname.length < 4) {
        errors.nickname = 'Must be greater than 4 digits';
    }
    if (register.nickname.length > 10) {
        errors.nickname = 'Must be less than 10 digits';
    }
    if (register.name === '') {
        errors.name = 'name is required';
    }
    if (register.name.length < 3) {
        errors.name = 'Must be greater than 3 characters';
    } else if (register.name.length > 15) {
        errors.name = 'Must be less than 15 characters';
    }
    if (register.lastname === '') {
        errors.lastname = 'last name is required';
    }
    if (register.lastname.length < 4) {
        errors.lastname = 'Must be greater than 4 characters';
    }
    if (register.lastname.length > 10) {
        errors.lastname = 'Must be less than 10 characters';
    }
    if (register.password.length < 6) {
        errors.password = 'Must be greater than 6 characters';
    } else if (register.password.length > 10) {
        errors.password = 'Must be less than 10 characters';
    }

    if (!/\d/.test(register.password)) {
        errors.password = 'Must have at least one numeric character';
    }

    return errors;
};

export default validate;
