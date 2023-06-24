import { useState } from "react";
import validate from "./validate";
import styles from "./Form.module.css"

const Form = () => {
    
    const getCurrentDate = () => {
        const currentDate = new Date().toLocaleString();
        return currentDate;
    };

    const [postNews, setPost] = useState({
        Link: '',
        Title: '',
        Category: '',
        Author: '',
        Description: '',
        Image: "",
        createDate: getCurrentDate(),
    });

    const [errors, setErrors] = useState({
        Link: '',
        Title: '',
        Category: '',
        Author: '',
        Description: '',
        Image: "",
        createDate:""
    });


    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setPost({
            ...postNews,
            [name]: value,
        });

        const updatedErrors = validate({
            ...postNews,
            [name]: value,
        });

        setErrors(updatedErrors);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div>
                <form onSubmit={handleOnSubmit} className={styles.Formu}>
                    <div className={styles.containerdiv}>

                        <label className={styles.Title}>Title</label>
                        <input
                            onChange={handleOnChange}
                            value={postNews.Title}
                            type="text"
                            name="Title"
                            placeholder="your title"
                        />
                        <hr></hr>
                        {errors.Title && <span className={styles.errorTitle}>{errors.Title}</span>}

                        <label className={styles.createDate}>Date</label>
                        <input
                            onChange={handleOnChange}
                            value={postNews.createDate}
                            type="text"
                            name="createDate"
                            placeholder=""
                        />
                        <hr></hr>
                        {errors.createDate && <span className={styles.errorCreateDate}>{errors.createDate}</span>}
                        
                        <label className={styles.Description}>Description</label>
                        <input
                            onChange={handleOnChange}
                            value={postNews.Description}
                            type="text"
                            name="Description"
                            placeholder=""
                        />
                        <hr></hr>
                        {errors.Description && <span className={styles.errorDescription}>{errors.Description}</span>}
                        
                        <label className={styles.Image}>Image</label>
                        <input
                            onChange={handleOnChange}
                            value={postNews.Image}
                            type="file"
                            name="Image"
                        />
                        <hr></hr>
                        {errors.Image && <span className={styles.errorImage}>{errors.Image}</span>}
                        

                        <label className={styles.Author}>Author</label>
                        <input
                            onChange={handleOnChange}
                            value={postNews.Author}
                            type="text"
                            name="Author"
                            placeholder=""
                        />
                        <hr></hr>
                        {errors.Author && <span className={styles.errorAuthor}>{errors.Author}</span>}
                        
                        <label className={styles.Category}>Category</label>
                        <input
                            onChange={handleOnChange}
                            value={postNews.Category}
                            type="text"
                            name="Category"
                            placeholder=""
                        />
                        <hr></hr>
                        {errors.Category && <span className={styles.errorCategory}>{errors.Category}</span>}
                        
                        <button
                            disabled={
                                !postNews.Title ||
                                !postNews.Description ||
                                !postNews.Image ||
                                !!postNews.createDate ||
                                !postNews.Link ||
                                !postNews.Author ||
                                !postNews.Category 
                            }>
                            post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form
