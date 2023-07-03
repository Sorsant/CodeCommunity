import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postComments } from "../../components/Redux/Actions/ActionHome";
import styles from "./Interactions.module.css";

const CommentForm = ({ handleSubmit, submitLabel, hasCancelButton = false, handleCancel, initialText = "" }) => {
   // console.log(handleSubmit);

   const userInfo = useSelector((state) => state.userdb.user);
   const [text, setText] = useState(initialText);
   const isTextareaDisabled = text.length === 0;
   const dispatch = useDispatch();

   // useEffect(() => {
   //    localStorage.setItem("loggedInUserId", JSON.stringify(userInfo?.id));
   //    setText((prevPost) => ({
   //       ...prevPost,
   //       name: userInfo?.id
   //    }));
   // }, [userInfo]);

   const onSubmit = (event) => {
      dispatch(postComments(text));
      event.preventDefault();
      handleSubmit(text);
      setText("");
   };

   return (
      <form onSubmit={onSubmit}>
         {console.log(text)}
         <input className={styles.form_textarea} value={text} onChange={(event) => setText(event.target.value)} />
         <button className={styles.form_button} disabled={isTextareaDisabled} onClick={onSubmit}>
            {submitLabel}
         </button>

         {
            hasCancelButton && (
               <button type="button" className={styles.cancel_button} onClick={handleCancel}>
                  Cancel
               </button>
            )
         }
      </form >
   );
};

export default CommentForm;
