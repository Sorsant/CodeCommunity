import style from "./detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import posteos from "../../assets/infoHomePost";

<<<<<<< HEAD:client/src/views/detail/detail.tsx
interface Post {
  id: number;
  nickname: string;
  user_imagen: string;
  titulo: string;
  description: string;
  imagen: string;
  likes: number;
  createDate: string;
  gitHub: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id ?? "0");
  const [post, setPost] = useState<Post | undefined>(undefined);
=======
const PostDetail = () => {
  const { id } = useParams();

  const [post, setPost] = useState(undefined);
>>>>>>> e96a840c0743f54858805d7107237fc7c52accda:client/src/views/detail/detail.jsx

  useEffect(() => {
    setPost(posteos.find((post) => post.id === postId));
  }, [id]);

  return (
    <div className={style.postDetailContainer}>
      <h2 className={style.postTitle}>{post?.titulo}</h2>
      <p className={style.postDescription}>{post?.description}</p>
      {post?.imagen && (
        <img className={style.postImage} src={post?.imagen} alt="" />
      )}
      <p className={style.postMetadata}>
        <strong>ID:</strong> {post?.id}
      </p>
      <p className={style.postMetadata}>
        <strong>Nickname:</strong> {post?.nickname}
      </p>
      <p className={style.postMetadata}>
        <strong>User Imagen:</strong> <img src={post?.user_imagen} alt="" />
      </p>
      <p className={style.postMetadata}>
        <strong>Likes:</strong> {post?.likes}
      </p>
      <p className={style.postMetadata}>
        <strong>Create Date:</strong> {post?.createDate}
      </p>
      <p className={style.postMetadata}>
        <strong>GitHub:</strong>{" "}
        <a
          className={style.postGitHubLink}
          href={post?.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          {post?.gitHub}
        </a>
      </p>
    </div>
  );
};

export default PostDetail;