const validate = (post: {
    titulo: string;
    description: string;
    imagen: string;
}): {
    titulo?: string;
    description?: string;
    imagen?: string;
} => {
    let errors: {
        titulo?: string;
        description?: string;
        imagen?: string;
    } = {};




    if (post.titulo === '') {
        errors.titulo = 'Title is required';
    }
    if (post.titulo.length < 1) {
        errors.titulo = 'Must be greater than 1 digits';
    }
    if (post.titulo.length > 20) {
        errors.titulo = 'Must be less than 20 digits';
    }
    if (post.description === '') {
        errors.description = 'Description is required';
    }
    if (post.description.length < 1) {
        errors.description = 'Must be greater than 1 characters';
    }
    if (post.description.length > 1500) {
        errors.titulo = 'Must be less than 1500 digits';
    }





    return errors;
};

export default validate;
