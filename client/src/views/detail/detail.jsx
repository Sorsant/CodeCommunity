import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostIds } from "../../components/Redux/Actions/ActionHome";
import { getUserId } from "../../components/Redux/Actions/User/actionUser";
import { resetPostData } from "../../components/Redux/Actions/User/actionUser";
import style from "./detail.module.css";
import EditPost from "../EditPost/EditPost";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.home.users);
  const post = useSelector((state) => state.home.posts);
  const [postId, setPostId] = useState({});
  const [isReady, setIsReady] = useState(false);
  const userId = useSelector((state) => state.userdb.user?.id);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    dispatch(getPostIds(id));

    return () => {
      dispatch(resetPostData());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (post && post.user) {
      dispatch(getUserId(post.user));
      setPostId(post);
      setIsReady(true);
    }
  }, [dispatch, post]);

  const handleGoBack = () => {
    navigate(-2);
  };

  const isCurrentUserCreator = post.user === userId;

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

  return (
    <div className={style.postDetailContainer}>

      <div className={style.post_card}>
        <div className={style.avatar}></div>
        <div className={style.info}> <h1>{user && user.first_name} {user && user.last_name}</h1>
          <h1>{user && user.email}</h1></div>
        <hr />
        <h1 className={style.title}>{post && post.title}</h1>
        <hr />
        <div className={style.image_preview}><img src={post && post.image} alt={post && post.image} className={style.image} /></div>
        <hr />
        <h3 className={style.description}>{post && post.description}</h3>
      </div>

      <button className={`btn btn-success fs-3 ${style["back"]}`} onClick={handleGoBack}>Back</button>

      {/* Botón "Edit" solo para el creador del post */}
      {isCurrentUserCreator && !showEditForm && (
        <button className={`btn btn-secondary fs-4 ${style["edit"]}`} onClick={handleEditClick}>Edit</button>
      )}

      {showEditForm && (
        <div>
          <EditPost postId={postId} />
          <button className={`btn btn-danger fs-4 ${style["cancel"]}`} onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
