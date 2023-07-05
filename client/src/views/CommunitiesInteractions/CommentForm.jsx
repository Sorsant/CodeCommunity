import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postComments } from "../../components/Redux/Actions/ActionHome";
import styles from "./Interactions.module.css";
import { getPostIds } from "../../components/Redux/Actions/ActionHome";

const CommentForm = ({ handleSubmit, submitLabel, hasCancelButton = false, handleCancel }) => {
   const dispatch = useDispatch();
   const { id } = useParams();

   const users = useSelector((state) => state.home.users);
   const userInfo = useSelector((state) => state.userdb.user);
   const userPost = useSelector((state) => state.home.posts.user);
   const user = users.find(user => user.id === userPost);

   const [inputValues, setInputValues] = useState({
      description: "",
      user: user,
      post: id,
   });

   const isTextareaDisabled = inputValues.description.length === 0;

   useEffect(() => {
      localStorage.setItem("loggedInUserId", JSON.stringify(userInfo?.id));
      setInputValues(
         {
            ...inputValues,
            user: userInfo?.id
         }
      );

      dispatch(getPostIds(id)).catch((error) => {
         window.alert("Post not found");
      });
   }, [dispatch, id, userInfo]);

   const onSubmit = (event) => {
      dispatch(postComments(inputValues));
      event.preventDefault();
      handleSubmit(inputValues.description);
      setInputValues({
         ...inputValues,
         description: ''
      });
   };

   const handleChange = (event) => {
      const { name, value } = event.target;

      setInputValues({
         ...inputValues,
         [name]: value,
      });
   }

   return (
      <form onSubmit={onSubmit}>
         <textarea className={styles.form_textarea} value={inputValues.description} name="description" onChange={handleChange} />
         <button className={styles.form_button} disabled={isTextareaDisabled} onClick={onSubmit}>
            {submitLabel}
         </button>
         {hasCancelButton && (
            <button type="button" className={styles.cancel_button} onClick={handleCancel}>
               Cancelar
            </button>
         )}
      </form>
   );
};

export default CommentForm;
