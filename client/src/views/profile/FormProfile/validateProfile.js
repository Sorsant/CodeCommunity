const validate = (profile) => {
    let errors = {};
  
    if (profile.birthday === '') {
      errors.birthday = 'birthday is required';
    }
  
    return errors;
  };
  
  export default validate;