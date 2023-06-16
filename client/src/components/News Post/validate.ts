const validate = (postNews:{
    Link: string;
    Title: string;
    Description?: string;
    Author: string;
    Category: string;
    Image: string;
    createDate:string
}): {
    Link?: string;
    Title?: string;
    Description?: string;
    Author?: string;
    Category?: string;
    Image?: string;
    createDate?:string
} => {
    let errors: {
        Link?: string;
        Title?: string;
        Description?: string;
        Author?: string;
        Category?: string;
        Image?: string;
        createDate?:string
    } = {};

    if (postNews.Link === "") {
        errors.Link = "Link is required";
    }
    if (postNews.Title === "") {
        errors.Title = "Title is required";
    }
    if (postNews.Title.length > 10) {
            errors.Title = "Cannot be longer than 10 characters"
    }    
    
    if (postNews.Description === "") {
            errors.Description = "Description is required"
            }

    
            if (postNews.Author === "") {
                errors.Author = "Author is required"
                }

                if (postNews.Category === "") {
                    errors.Category = "Category is required"
                    }


                    if (postNews.Image === "") {
                        errors.Image = "Image is required"
                        }

                        if (postNews.createDate === "") {
                            errors.createDate = "Date is required"
                            }

                            if (postNews.createDate === "") {
                                errors.createDate = "createDate is required"
                                }

    return errors;

}

export default validate