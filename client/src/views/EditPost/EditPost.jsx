import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloudinaryUploadWidget from "./CloudinaryWidget/CloudinaryUploadWidget";
import { uploadPost } from "../../components/Redux/Actions/ActionHome";
import styles from "./EditPost.module.css"
const EditPost = () => {
    const userInfo = useSelector((state) => state.userdb.user);
    const login = useSelector((state) => state.home.login);
    const userExtra = useSelector((state) => state.home.userExtra);
    const dispatch = useDispatch();

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
      }
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
                dispatch(uploadPost(post));
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

      return (
        <div>
          {console.log(post)}
          {login ? (
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
                type="text"
                name="description"
                placeholder="Your description"
                
              />
              {errors.description && <span>{errors.description}</span>}
              <br />
              <br />
              <br />
              <div>
                <br />
                <CloudinaryUploadWidget className={styles} onImageUrl={handleImageUrl} />
              </div>
    
              <button className={styles.boton}
                disabled={
                  !post.title ||
                  !post.description ||
                  !!errors.title ||
                  !!errors.description ||
                  !login
                }
               
              >
                Post
              </button>
            </form>
          ) : (
            <p>Login to post!</p>
          )}
        </div>
      );
    };














export default EditPost