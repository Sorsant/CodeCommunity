import CommentForm from "./CommentForm";
import styles from "./Interactions.module.css";

const Comment = ({ comment, replies, setActiveComment, activeComment, updateComment, deleteComment, addComment, parentId = null, currentUserId }) => {
   const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === "editing";
   const isReplying = activeComment && activeComment.id === comment.id && activeComment.type === "replying";
   const fiveMinutes = 300000;
   const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
   const canDelete = currentUserId === comment.userId && replies.length === 0 && !timePassed;
   const canReply = Boolean(currentUserId);
   const canEdit = currentUserId === comment.userId && !timePassed;
   const replyId = parentId ? parentId : comment.id;
   const createdAt = new Date(comment.createdAt).toLocaleDateString();

   return (
      <div key={comment.id} className={styles.comment}>
         <div className={styles.image_container}>{/* <img src="/user-icon.png" />    */}</div>
         <div className={styles.right_part}>
            <div className={styles.comment_content}>
               <div className={styles.comment_author}>{comment.username}</div>
               <div>{createdAt}</div>
            </div>
            {!isEditing && <div className={styles.comment_text}>{comment.body}</div>}
            {isEditing && (
               <CommentForm
                  submitLabel="Update"
                  hasCancelButton
                  initialText={comment.body}
                  handleSubmit={(text) => updateComment(text, comment.id)}
                  handleCancel={() => {
                     setActiveComment(null);
                  }}
               />
            )}
            <div className={styles.comment_actions}>
               {canReply && (
                  <div className={styles.comment_action} onClick={() => setActiveComment({ id: comment.id, type: "replying" })}>
                     Reply
                  </div>
               )}
               {canEdit && (
                  <div className={styles.comment_action} onClick={() => setActiveComment({ id: comment.id, type: "editing" })}>
                     Edit
                  </div>
               )}
               {canDelete && (
                  <div className={styles.comment_action} onClick={() => deleteComment(comment.id)}>
                     Delete
                  </div>
               )}
            </div>
            {isReplying && <CommentForm submitLabel="Reply" handleSubmit={(text) => addComment(text, replyId)} />}
            {replies.length > 0 && (
               <div className={styles.replies}>
                  {replies.map((reply) => (
                     <Comment
                        comment={reply}
                        key={reply.id}
                        setActiveComment={setActiveComment}
                        activeComment={activeComment}
                        updateComment={updateComment}
                        deleteComment={deleteComment}
                        addComment={addComment}
                        parentId={comment.id}
                        replies={[]}
                        currentUserId={currentUserId}
                     />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default Comment;
