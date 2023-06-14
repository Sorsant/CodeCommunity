import style from "./detail.module.css";

const post = {
  id: 3,
  nickname: "ByteMaster",
  user_imagen: "https://i.pravatar.cc/200",
  titulo: "Aplicaciones móviles multiplataforma",
  description:
    "Descubre cómo desarrollar aplicaciones móviles que se ejecuten en múltiples plataformas, como iOS y Android, utilizando frameworks como React Native o Flutter.",
  imagen:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8zqzi4cW7ej1sEVk0TmYSJALB4WnTwlH4PTqEbPRCbJu1a2X67bLwZVkY7IG6S8Yo7UA&usqp=CAU", // o undefined
  likes: 20,
  createDate: "22/01/2023",
  gitHub: "https://github.com/",
};

const PostDetail = () => {
  return (
    <div className={style.postDetailContainer}>
      <h2 className={style.postTitle}>{post.titulo}</h2>
      <p className={style.postDescription}>{post.description}</p>
      {post.imagen && (
        <img className={style.postImage} src={post.imagen} alt="" />
      )}
      <p className={style.postMetadata}>
        <strong>ID:</strong> {post.id}
      </p>
      <p className={style.postMetadata}>
        <strong>Nickname:</strong> {post.nickname}
      </p>
      <p className={style.postMetadata}>
        <strong>User Imagen:</strong> <img src={post.user_imagen} alt="" />
      </p>
      <p className={style.postMetadata}>
        <strong>Likes:</strong> {post.likes}
      </p>
      <p className={style.postMetadata}>
        <strong>Create Date:</strong> {post.createDate}
      </p>
      <p className={style.postMetadata}>
        <strong>GitHub:</strong>{" "}
        <a
          className={style.postGitHubLink}
          href={post.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          {post.gitHub}
        </a>
      </p>
    </div>
  );
};

export default PostDetail;
