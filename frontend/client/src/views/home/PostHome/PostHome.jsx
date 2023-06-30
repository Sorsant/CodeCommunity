import React, { useState } from "react";
import validate from "./validatePost";
import styles from "./post.module.css";
import { useDispatch } from "react-redux";
import { addHomePosts } from "../../../components/Redux/Actions/ActionHome";
import { useSelector } from "react-redux";
import { getUserExtras } from "../../../components/Redux/Actions/User/actionUser";
import { useEffect } from "react";

const Posteohome = () => {
  const login = useSelector((state) => state.home.login);
  const dispatch = useDispatch();
  const userExtra = useSelector((state) => state.home.userExtra);

  const [post, setPost] = useState({
    image: "",
    title: "",
    description: "",
    user: "",
  });

  const [errors, setErrors] = useState({
    image: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    dispatch(getUserExtras());
  }, [dispatch]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setPost({
      ...post,
      [name]: value,
    });

    const updatedErrors = validate({
      ...post,
      [name]: value,
    });

    setErrors(updatedErrors);
  };

  const handleOnSubmit = (event) => {
    if (!login) {
      // Si el usuario no está logueado, muestra el componente de login
      window.location.href = `/login`;
      return;
    }
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
        user: "",
      });
    } else {
      alert("You need to be a premium user to post.");
      setPost({
        ...post,
        user: "",
      });
    }
  };

  return (
    <div className={styles.containerForm}>
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

          <label>user</label>
          <input
            onChange={handleOnChange}
            value={post.user}
            type="text"
            name="user"
          />

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
        <p className={styles.advice}>login to post!</p>
      )}
    </div>
  );
};

export default Posteohome;
