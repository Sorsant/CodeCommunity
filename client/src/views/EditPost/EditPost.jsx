import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloudinaryUploadWidget from "./CloudinaryWidget/CloudinaryUploadWidget";
import { uploadPost } from "../../components/Redux/Actions/ActionHome";
import styles from "./EditPost.module.css";
import validate from "./validate";
import { useNavigate } from "react-router-dom";
const EditPost = ({ postId }) => {
  const user = useSelector((state) => state.userdb.user);
  const userInfo = useSelector((state) => state.userdb.user);
  const login = useSelector((state) => state.home.login);
  const userExtra = useSelector((state) => state.home.userExtra);
  const extra = userExtra.find((users) => users.id === (user && user.id));

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [post, setPost] = useState({
    image: null,
    title: "",
    description: "",
    user: null,
    id: null,
    created: null,
    likes: [],
  });

  const [errors, setErrors] = useState({
    image: "",
    title: "",
    description: "",
    user: null,
    id: null,
    created: null,
    likes: [],
  });

  const [originalTitle, setOriginalTitle] = useState("");
  const [originalDescription, setOriginalDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("loggedInUserId", JSON.stringify(userInfo?.id));
    setPost((prevPost) => ({
      ...prevPost,
      user: userInfo?.id,
      id: postId?.id,
      created: postId?.created,
      image: postId?.image,
      likes: postId?.likes,
    }));
  }, [userInfo, postId]);

  useEffect(() => {
    if (postId?.title) {
      setPost((prevPost) => ({
        ...prevPost,
        title: postId.title,
      }));
      setOriginalTitle(postId.title);
    }

    if (postId?.description) {
      setPost((prevPost) => ({
        ...prevPost,
        description: postId.description,
      }));
      setOriginalDescription(postId.description);
    }
  }, [postId]);

  const handleImageUrl = (secureUrl) => {
    setPost((prevPost) => ({
      ...prevPost,
      image: secureUrl,
    }));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    if (name === "title" && value !== originalTitle) {
      setPost((prevPost) => ({
        ...prevPost,
        [name]: value,
      }));
    } else if (name === "description" && value !== originalDescription) {
      setPost((prevPost) => ({
        ...prevPost,
        [name]: value,
      }));
    }
    const updatedErrors = validate({
      ...post,
      [name]: value,
    });
    setErrors(updatedErrors);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(uploadPost(post, postId.id));
    alert("Post created");
    navigate(`/post/${postId.id}`)

  };

  return (
    <div className={styles.containerForm}>
      {console.log(post)}
      <form className="edit-post-form" onSubmit={handleOnSubmit}>
        <label>Title</label>
        <br />
        <input
          onChange={handleOnChange}
          value={post.title}
          type="text"
          name="title"
          placeholder="Your title"
        />
        {errors.title && <span>{errors.title}</span>}
        <br />
        <label>Description</label>
        <br />
        <textarea
          onChange={handleOnChange}
          value={post.description}
          name="description"
          placeholder="Your description"
          className={styles.inputDescription}
        ></textarea>
        {errors.description && <span>{errors.description}</span>}
        <br />
        <div className={styles.uploadWidgetContainer}>
          <label>Image</label>
          <br />
          <br />
          {post.image && <img src={post.image} alt="Post" />}
          <br />
          <div className={styles.cloudinary}>
            <CloudinaryUploadWidget onImageUrl={handleImageUrl} />
          </div>
        </div>
        <br />
        <button className={` btn btn-success fs-4 ${styles["submitButton"]}`} type="submit">
          Edit Post
        </button>

      </form>
    </div>
  );
};

export default EditPost;
