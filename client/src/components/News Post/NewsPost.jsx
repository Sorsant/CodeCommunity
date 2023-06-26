import { useState, useEffect } from "react";
import validate from "./validate";
import styles from "./NewsPost.module.css";
import { addNews } from "../Redux/Actions/Post/action-post";
import { useDispatch, useSelector } from "react-redux";
import { Getcategory } from "../Redux/Actions/Get/action-get";
import { useNavigate } from "react-router-dom";

const NewsPost = () => {
    const dispatch = useDispatch();
    const selectCategory = useSelector(state => state.category)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch((Getcategory()))
    }, [dispatch])

    const getCurrentDate = () => {
        const currentDate = new Date().toLocaleString();
        return currentDate;
    };

    const [postNews, setPost] = useState({
        link: "",
        title: "",
        category: [],
        author: "",
        description: "",
        image: "",
        createDate: getCurrentDate(),
    });

    const [errors, setErrors] = useState({
        link: "",
        title: "",
        category: [],
        author: "",
        description: "",
        image: "",
    })

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
        dispatch(addNews(postNews));
        alert("Noticia creada");
        navigate("/home");
    };
    const handleSelect = (event) => {
        setPost({ ...postNews, category: [...postNews.category, event.target.value] });
        setErrors(
            validate({ ...postNews, category: [...postNews.category, event.target.value] })
        )
    }

    return (
        <div className={styles.form}>
            {console.log({ selectCategory })}
            <form onSubmit={handleOnSubmit} className={styles.container}>
                <div className={styles.containerdiv}>
                    {console.log(postNews)}
                    <label className={styles.Title}>Title</label>
                    <input
                        onChange={handleOnChange}
                        value={postNews.title}
                        type="text"
                        name="title"
                        placeholder="your title"
                    />
                    <hr></hr>
                    {errors.title && (
                        <span className={styles.errorTitle}>{errors.title}</span>
                    )}

                    {/* <label className={styles.createDate}>Date</label>
                        <input
                            onChange={handleOnChange}
                            value={postNews.createDate}
                            type="text"
                            name="createDate"
                            placeholder=""
                        />
                        <hr></hr>
                        {errors.createDate && <span className={styles.errorCreateDate}>{errors.createDate}</span>} */}

                    <label className={styles.Description}>Description</label>
                    <input
                        onChange={handleOnChange}
                        value={postNews.description}
                        type="text"
                        name="description"
                        placeholder=""
                    />
                    <hr></hr>
                    {errors.description && (
                        <span className={styles.errorDescription}>
                            {errors.description}
                        </span>
                    )}

                    <label className={styles.link}>Link</label>
                    <input
                        onChange={handleOnChange}
                        value={postNews.link}
                        type="text"
                        name="link"
                        placeholder=""
                    />
                    <hr></hr>
                    {errors.link && (
                        <span className={styles.errorLink}>{errors.link}</span>
                    )}

                    <label className={styles.Image}>Image</label>
                    <input
                        onChange={handleOnChange}
                        value={postNews.image}
                        type="file"
                        name="image"
                    />
                    <hr></hr>
                    {errors.image && (
                        <span className={styles.errorImage}>{errors.image}</span>
                    )}

                    <label className={styles.Author}>Author</label>
                    <input
                        onChange={handleOnChange}
                        value={postNews.author}
                        type="text"
                        name="author"
                        placeholder=""
                    />
                    <hr></hr>
                    {errors.author && (
                        <span className={styles.errorAuthor}>{errors.author}</span>
                    )}
                    <label>SELECCIONAR CATEGORIA</label>
                    <select className={styles.Category} onChange={(event) => handleSelect(event)}>
                        <option name="category" className={styles.category}>Elegir category</option>
                        {
                            selectCategory?.map((p) =>
                                <option key={p.id} value={p.id}>{p.name}</option>
                            )}
                    </select>
                    <hr></hr>
                    {errors.category && (
                        <span className={styles.errorCategory}>{errors.category}</span>
                    )}

                    <button
                        disabled={
                            !postNews.title ||
                            !postNews.description ||
                            !postNews.image ||
                            !postNews.link ||
                            !postNews.author ||
                            !postNews.category
                        }
                    >
                        post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewsPost;
