const validate = (post: {
    title: string;
    description: string;
    image: string;
}): {
    title?: string;
    description?: string;
    image?: string;
} => {
    let errors: {
        title?: string;
        description?: string;
        image?: string;
    } = {};




    if (post.title === '') {
        errors.title = 'Title is required';
    }
    if (post.title.length < 1) {
        errors.title = 'Must be greater than 1 digits';
    }
    if (post.title.length > 20) {
        errors.title = 'Must be less than 20 digits';
    }
    if (post.description === '') {
        errors.description = 'Description is required';
    }
    if (post.description.length < 1) {
        errors.description = 'Must be greater than 1 characters';
    }
    if (post.description.length > 1500) {
        errors.title = 'Must be less than 1500 digits';
    }





    return errors;
};

export default validate;
