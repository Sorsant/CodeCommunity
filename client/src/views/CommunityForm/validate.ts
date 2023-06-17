const validate = (communityForm: {
    name: string;
    description: string;
    language: string;
    //image?: string;
}): {
    name?: string;
    description?: string;
    language?: string;
    //image?: string;
} => {
    let errors: {
        name?: string;
        description?: string;
        language?: string;
    //    image?: string;
    } = {};

    if (communityForm.name.length <= 10) {
        errors.name = 'The name of the group must have more than 10 characters';
    }
    if (communityForm.description.length <= 25) {
        errors.description = 'The description of the group must have more than 25 characters';
    }
    if (communityForm.language === '') {
        errors.language = 'You have to select a language';
    }
    //if (communityForm.image === '-') {
    //    errors.image = 'Please upload an image';
    //}
    return errors;
};

export default validate;