const validate = (postNews) => {
  let errors = {};

  if (postNews.link === "") {
    errors.Link = "Link is required";
  }
  if (postNews.title === "") {
    errors.Title = "Title is required";
  }
  if (postNews.title.length > 50) {
    errors.Title = "Cannot be longer than 50 characters";
  }    

  if (postNews.description === "") {
    errors.Description = "Description is required";
  }

  if (postNews.author === "") {
    errors.Author = "Author is required";
  }

  if (postNews.category === "") {
    errors.Category = "Category is required";
  }

  if (postNews.image === "") {
    errors.Image = "Image is required";
  }

  // if (postNews.createDate === "") {
  //   errors.createDate = "Date is required";
  // }

  return errors;
};

export default validate;
