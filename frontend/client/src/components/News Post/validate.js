const validate = (postNews) => {
    let errors = {};
  
    if (postNews.Link === "") {
      errors.Link = "Link is required";
    }
    if (postNews.Title === "") {
      errors.Title = "Title is required";
    }
    if (postNews.Title.length > 10) {
      errors.Title = "Cannot be longer than 10 characters";
    }    
  
    if (postNews.Description === "") {
      errors.Description = "Description is required";
    }
  
    if (postNews.Author === "") {
      errors.Author = "Author is required";
    }
  
    if (postNews.Category === "") {
      errors.Category = "Category is required";
    }
  
    if (postNews.Image === "") {
      errors.Image = "Image is required";
    }
  
    if (postNews.createDate === "") {
      errors.createDate = "Date is required";
    }
  
    return errors;
  };
  
  export default validate;
  