import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const PostCard = ({ id, title, description, image, created }) => {
  const loggin = useSelector((state) => state.loggin);

  const handleMoreInfo = () => {
    if (loggin) {
      // Si el usuario está logueado, redirige a `/detail/${id}`
      window.location.href = `/detail/${id}`;
    } else {
      // Si el usuario no está logueado, muestra el componente de login
      window.location.href = `/login`;
    }
  };

  return (
    <div className={styles.container}>
      {/*Revisar el parametro para identificar el grupo*/}
      <div>
        <div className={styles.headerCard}>
          <h3 className={styles.text1}>{title}</h3>
          {/* <img src={user_imagen} alt={nickname} className={styles.img1} /> */}
        </div>
        {/* <h2 className={styles.text3}>{titulo}</h2> */}
        <img src={image} alt={image} className={styles.img2} />
        {/* <h5 className={styles.text2}>Github: {gitHub}</h5> */}
        <div className={styles.container2}>
          <h5 className={styles.text2}>Created at: {created}</h5>
          {/* <h5 className={styles.text2}>{likes}⭐</h5> */}
        </div>
        <div>
          <p className={styles.text2}>{description}</p>
        </div>
        <Link to="#" className={styles.linkDetail} onClick={handleMoreInfo}>
          <h2 className={styles.text4}>More Info</h2>
        </Link>
      </div>
    </div>
  );
};
//---------nuevacardPost cuando hayan users---------

// const PostCard = () => {
//   const users = useSelector(state => state.users);
//   const posteos = useSelector(state => state.posts);

//   return (
//     <div className={styles.containerForm}>
//       {posteos.map((post) => {
//         const user = users.find(user => user.id === post.user);

//         if (user) {
//           return (
//             <div className={styles.cardContainer} key={post.id}>
//               <div className={styles.userContainer}>

//                 <img src={user.user_image} alt={user.name} />
//                 <h2>{user.name}</h2>
//                 {user.premium && user.postulation && (
//                   <p>

//                     <Link to={`/instructor/${user.id}`}>
//                       <button> Puedes pagarle a este instructor</button>
//                     </Link>
//                   </p>
//                 )}
//               </div>

//               <div className={styles.postContainer}>
//                 <h2>{post.title}</h2>
//                 <h2>{post.description}</h2>
//                 <img src={post.image} alt={post.title} />
{
  /* <Link to={`/detail/${id}`} className={styles.linkDetail}>
            <h2 className={styles.text4}>More Info</h2>
              </Link> */
}
//               </div>
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// };

export default PostCard;
