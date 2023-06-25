import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";



const PostCard = () => {
     const users = useSelector(state => state.users);
     const posteos = useSelector(state => state.posts);
  
     return (
       <div className={styles.containerForm}>
         {posteos.map((post) => {
           const user = users.find(user => user.id === post.user);
  
           if (user) {
             return (
              <div className={styles.cardContainer} key={post.id}>
                 <div className={styles.userContainer}>
  
                  {/* <img src={user.user_image} alt={user.name} /> */}
                  <h2>{user.first_name}</h2>
                  {/* {user.premium && user.postulation && (
                    <p>
                     <Link to={`/instructore/${user.id}`}>
                       <button> Puedes pagarle a este instructor</button>
                     </Link>
                    </p>
                  )} */}
                </div>
  
                 <div className={styles.postContainer}>
                 <h2>{post.title}</h2>
                 <h2>{post.description}</h2>
                   <img src={post.image} alt={post.title} />
  {
     <Link to={`/detail/${user.id}`} className={styles.linkDetail}>
              <h2 className={styles.text4}>More Info</h2>
                </Link> 
  }
                </div>
               </div>
            );
          }
         })}
       </div>
     );
   };
  
  export default PostCard;