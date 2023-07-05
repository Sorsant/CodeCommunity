import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import styles from "./Interactions.module.css";
import { postComments, getComments } from "../../components/Redux/Actions/ActionHome";
// import {
//    getComments as getCommentsApi,
//    createComment as createCommentApi,
//    updateComment as updateCommentApi,
//    deleteComment as deleteCommentApi,
// } from "../../api";

const Comments = ({ currentUserId }) => {
   const { id } = useParams();

   // Obtener los comentarios del estado de Redux Toolkit
   const globalComments = useSelector((state) => state.home.comments);
   const [backendComments, setBackendComments] = useState([])
   // Filtrar los comentarios por el ID del post actual
   const filteredComments = globalComments.filter((comment) => comment.post === id);

   const [activeComment, setActiveComment] = useState(null);

   // const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);

   const getReplies = (comment) =>
      filteredComments
         .filter((filteredComments) => filteredComments.post === comment.post)
         .sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime());

   const addComment = async (description, post) => {
      try {
         const comment = postComments(description, post);
         setBackendComments([comment, ...filteredComments]);
         setActiveComment(null);
      } catch (error) {
         // console.log(response.data);
      }
   };


   // const updateComment = (text, commentId) => {
   //    updateCommentApi(text).then(() => {
   //       const updatedBackendComments = backendComments.map((backendComment) => {
   //          if (backendComment.id === commentId) {
   //             return { ...backendComment, body: text };
   //          }
   //          return backendComment;
   //       });
   //       setBackendComments(updatedBackendComments);
   //       setActiveComment(null);
   //    });
   // };

   // const deleteComment = (commentId) => {
   //    if (window.confirm("Are you sure you want to remove comment?")) {
   //       deleteCommentApi().then(() => {
   //          const updatedBackendComments = backendComments.filter((backendComment) => backendComment.id !== commentId);
   //          setBackendComments(updatedBackendComments);
   //       });
   //    }
   // };

   useEffect(() => {
      // const fetchComments = async () => {
      //    try {
      //       const data = getComments();
      //       setBackendComments(data);
      //    } catch (error) {
      //       console.log(response.data);
      //    }
      // };
      getComments();
      // fetchComments();
   }, []);


   return (
      <div className={styles.comments}>
         <h3 className={styles.title}>Comments</h3>
         <div className={styles.form_title}>Write comment</div>
         <CommentForm submitLabel="Write" handleSubmit={addComment} />
         <div className={styles.comments_container}>
            {filteredComments.map((rootComment) => (
               <Comment
                  key={rootComment.id}
                  comment={rootComment}
                  replies={getReplies(rootComment.id)}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  addComment={addComment}
                  // deleteComment={deleteComment}
                  // updateComment={updateComment}
                  currentUserId={currentUserId}
               />
            ))}
         </div>
      </div>
   );
};

export default Comments;