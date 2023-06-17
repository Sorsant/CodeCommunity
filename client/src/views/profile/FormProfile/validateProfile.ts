

const validate = (profile: {
    birthday: string;
}): {
    birthday?: string;

} => {
    let errors: {
        birthday?: string;
    } = {};




    if (profile.birthday === '') {
        errors.birthday = 'birthday is required';
    }





    return errors;
};

export default validate;
