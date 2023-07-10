import React, { useState, useEffect } from "react";
import validate from "./validatePost";
import styles from "./post.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addHomePosts } from "../../../components/Redux/Actions/ActionHome";
import { getUserExtras } from "../../../components/Redux/Actions/User/actionUser";
import CloudinaryUploadWidget from "./CloudinaryWidget/CloudinaryUploadWidget";
import { Modal, Button } from "react-bootstrap";

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

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("loggedInUserId", JSON.stringify(userInfo?.id));
    setPost((prevPost) => ({
      ...prevPost,
      user: userInfo?.id
    }));
  }, [userInfo, userExtra]);

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

  const handleImageUrl = (secureUrl) => {
    setPost((prevPost) => ({
      ...prevPost,
      image: secureUrl
    }));
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
      handleCloseModal();
    } else {
      alert("You need to be a premium user to post.");
      setPost((prevPost) => ({
        ...prevPost,
        user: ""
      }));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getUserExtras());
  }, [dispatch]);

  return (
    <div className={styles.containerForm}>
      {login ? (
        <>
          <Button variant="success" onClick={handleOpenModal}>
            Create a Post
          </Button>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title >Create a Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleOnSubmit}>
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
                  type="text"
                  name="description"
                  placeholder="Your description"
                  className={styles.inputDescription}
                />
                {errors.description && <span>{errors.description}</span>}
                <br />
                <br />
                <br />
                <div className={styles.cloudinary}>
                  <br />
                  <CloudinaryUploadWidget onImageUrl={handleImageUrl} />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                disabled={
                  !post.title ||
                  !post.description ||
                  !!errors.title ||
                  !!errors.description ||
                  !login
                }
                onClick={handleOnSubmit}
              >
                Post
              </Button>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <p className={styles.advice}>Login to post!</p>
      )}
    </div>
  );
};

export default Posteohome;
