import React, { useState, useEffect } from "react";
import validate from "./validatePost";
import styles from "./post.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addHomePosts } from "../../../components/Redux/Actions/ActionHome";
import { getUserExtras } from "../../../components/Redux/Actions/User/actionUser";

const Posteohome = () => {
  const login = useSelector((state) => state.home.login);
  const dispatch = useDispatch();
  const userExtra = useSelector((state) => state.home.userExtra);
  const userInfo = useSelector((state) => state.userdb.user);

  const [post, setPost] = useState({
    image: "",
    title: "",
    description: "",
    user: null
  });

  const [errors, setErrors] = useState({
    image: "",
    title: "",
    description: ""
  });


  useEffect(() => {
    localStorage.setItem("loggedInUserId", JSON.stringify(userInfo?.id));
    setPost((prevPost) => ({
      ...prevPost,
      user: userInfo?.id
    }));
  }, [userInfo]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));

    const updatedErrors = validate({
      ...post,
      [name]: value
    });

    setErrors(updatedErrors);
  };

  const handleOnSubmit = (event) => {

    const userNumber = Number(post.user);
    const premiumUser = userExtra.find(
      (user) => user.id === userNumber && user.premium
    );

    if (premiumUser) {
      dispatch(addHomePosts(post));
      setPost({
        image: "",
        title: "",
        description: "",
        user: post.user
      });
    } else {
      alert("You need to be a premium user to post.");
      setPost((prevPost) => ({
        ...prevPost,
        user: ""
      }));
    }
  };

  useEffect(() => {
    dispatch(getUserExtras());
  }, [dispatch]);

  return (
    <div className={styles.containerForm}>
      {console.log(post)}
      {login ? (
        <form onSubmit={handleOnSubmit}>
          <label>Title</label>
          <input
            onChange={handleOnChange}
            value={post.title}
            type="text"
            name="title"
            placeholder="Your title"
          />
          {errors.title && <span>{errors.title}</span>}

          <label>Description</label>
          <input
            onChange={handleOnChange}
            value={post.description}
            type="text"
            name="description"
            placeholder=""
          />
          {errors.description && <span>{errors.description}</span>}

          <label>Image</label>
          <input
            onChange={handleOnChange}
            value={post.image}
            type="text"
            name="image"
          />
          {errors.image && <span>{errors.image}</span>}

          <button
            disabled={
              !post.title ||
              !post.description ||
              !!errors.title ||
              !!errors.description ||
              !login
            }
            className={styles.button}
          >
            Post
          </button>
        </form>
      ) : (
        <p className={styles.advice}>Login to post!</p>
      )}
    </div>
  );
};

export default Posteohome;
