const validate = (post) => {
let errors = {};

if (post.title === '') {
    errors.title = 'Title is required';
  }
  if (post.title.length < 1) {
    errors.title = 'Must be greater than 1 character';
  }
  if (post.description === '') {
    errors.description = 'Description is required';
  }
  if (post.description.length < 1) {
    errors.description = 'Must be greater than 1 character';
  }
  if (post.description.length > 160) {
    errors.title = 'Must be less than 160 characters';
  }
  return errors;
}




export default validate