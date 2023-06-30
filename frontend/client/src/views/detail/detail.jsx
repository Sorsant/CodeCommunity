import style from "./detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostIds } from "../../components/Redux/Actions/ActionHome";
import { getUserId } from "../../components/Redux/Actions/User/actionUser";

const PostDetail = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const user = useSelector((state) => state.home.users);
    const post = useSelector((state) => state.home.posts.find((post) => post.id === id));


    useEffect(() => {
        dispatch(getPostIds(id))

            .catch((error) => {
                window.alert("Community not found");
            });

        dispatch(getUserId(post && post.user));
    }, [dispatch, id]);


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
