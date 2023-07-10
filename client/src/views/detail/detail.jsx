import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostIds } from "../../components/Redux/Actions/ActionHome";
import { getUserId } from "../../components/Redux/Actions/User/actionUser";
import { resetPostData } from "../../components/Redux/Actions/User/actionUser";
import style from "./detail.module.css";
import EditPost from "../EditPost/EditPost";
import { deletPostid } from "../../components/Redux/Actions/ActionHome";
import { Link } from "react-router-dom";
const PostDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.home.users);
  const userId = useSelector((state) => state.userdb.user?.id);
  const userExtra = useSelector((state) => state.home.userExtra);
  const userExtraID = useSelector((state) => state.userdb.userExtra?.id);
  const post = useSelector((state) => state.home.posts);
  const [postId, setPostId] = useState({});
  const [isReady, setIsReady] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("The instructor will be contacting you");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    navigate("/home");
  };

  const isCurrentUserCreator = post?.user === userId;
  const isCurrentUserExtra = post?.userExtra === userExtraID;

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
  };

  const handleDelet = () => {
    dispatch(deletPostid(id));
    navigate("/home");
  };
  const handleButton = (email) => {
    setRecipient(email);
  };
  ;
  const handleSend = () => {
    console.log("Recipient:", recipient);
    console.log("Message:", message);
    // ...
  };

  useEffect(() => {
    const loadDisqusScript = () => {
      var d = document,
        s = d.createElement("script");
      s.src = "https://codecommunity-com.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    };

    loadDisqusScript();
  }, []);

  return (
    <div className={style.postDetailContainer}>
      {isCurrentUserCreator && (
        <button onClick={handleDelet} className={style.deleteButton}>
          <lord-icon
            className={style.deleteButton}
            src="https://cdn.lordicon.com/kfzfxczd.json"
            trigger="boomerang"
            colors="primary:#FFFFFF"
          ></lord-icon>
        </button>
      )}

      <div className={style.post_card}>
        <div className={style.info}>
          <h1>
            {user && user?.first_name} {user && user?.last_name}
          </h1>
          <h4>{user && user?.email}</h4>
        </div>

        <hr />
        <h1 className={style.title}>{post && post.title}</h1>
        <hr />
        <div className={style.image_preview}>
          <img
            src={post && post?.image}
            alt={post && post?.image}
            className={style.image}
          />
        </div>
        <hr />
        <h3 className={style.description}>{post && post.description}</h3>
        <hr />
        <div id="disqus_thread" className={style.disqus}></div>
      </div>

      <Link to={"/home"}>
        <button className={`btn btn-success fs-3 ${style["back"]}`}>Back</button>
      </Link>

      {/* Botón "Edit" solo para el creador del post */}
      {isCurrentUserCreator && !showEditForm && (
        <button
          className={`btn btn-success fs-3 ${style["edit"]}`}
          onClick={handleEditClick}
        >
          Edit
        </button>
      )}
      {showEditForm && (
        <div>
          <EditPost postId={postId} />
          <button
            className={`btn btn-danger fs-4 ${style["cancel"]}`}
            onClick={handleCancelEdit}

          >
            Cancel
          </button>
        </div>
      )}

      {/* Botón "Contact" para abrir el modal */}
      <button
        className={`${style.button} largeText`}
        onClick={() => handleButton(user.email)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Contact
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Contact</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="recipient" className="form-label">Receiver:</label>
                <input type="text" className="form-control" id="recipient" value={recipient} readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea className="form-control" id="message" rows="4" value={message} readOnly></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={handleSend}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PostDetail