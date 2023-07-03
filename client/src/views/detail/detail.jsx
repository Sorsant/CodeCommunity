import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostIds } from "../../components/Redux/Actions/ActionHome";
import { getUserId, resetPostData } from "../../components/Redux/Actions/User/actionUser";
import style from "./detail.module.css";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.home.users);
  const post = useSelector((state) => state.home.posts);

  useEffect(() => {
    dispatch(getPostIds(id));

    return () => {
      dispatch(resetPostData());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (post && post.user) {
      dispatch(getUserId(post.user));
    }
  }, [dispatch, post]);

  return (
    <div className={style.postDetailContainer}>
      <h1>User: {user && user.first_name} {user && user.last_name}</h1>
      <h1>Email: {user && user.email}</h1>

      <h1 className={style.title}>Title: {post && post.title}</h1>
      <img src={post && post.image} alt={post && post.image} className={style.image} />
      <h3 className={style.description}>{post && post.description}</h3>
    </div>
  );
};

export default PostDetail;
