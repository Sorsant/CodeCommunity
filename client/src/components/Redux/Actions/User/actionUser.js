import axios from "axios";
import {
    getUser,
    getUserExtra,
    resetUserExtra,
    resetUser, 
    allLikesPost
} from '../../Reducer/HomeReducer';

export const getUsers = () => async (dispatch) => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/users/';
    const { data } = await axios.get(endpoint);
    dispatch(getUser(data));
};

export const getUserId = (id) => async (dispatch) => {
    const endpoint = `https://codecommunity-production.up.railway.app/codec/api/users/${id}`;
    const { data } = await axios.get(endpoint);
    console.log("entre a get user id", data);
    dispatch(getUser(data));
};

export const getUserExtras = () => async (dispatch) => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/user_extras/';
    const { data } = await axios.get(endpoint);
    dispatch(getUserExtra(data));
};
export const resetPostData = () => async (dispatch) => {
    dispatch(resetUser());
    dispatch(resetUserExtra());
}
export const likePost = (url) => async (dispatch) => {
    dispatch(allLikesPost(url));
  }
  export const addlikePost = (postId, userId, posts) => async (dispatch, getState) => {
    const loggedInUserId = localStorage.getItem("loggedInUserId");
    
    // Comprueba si el usuario está logeado y tiene un ID válido
    if (loggedInUserId) {
      dispatch(allLikesPost({ postId, userId })); // Pasa el objeto con postId y userId como payload
    
      // Actualizar los likes en el post correspondiente
      const post = posts.find((post) => post.id === postId);
      if (post) {
        post.likes.push(userId);
      }
      
      console.log(postId, userId, "entre a addlike");
      
      // Obtener el estado actual de los posts
      const currentState = getState().home.posts;
      
      // Actualizar los datos de likes en el localStorage
      localStorage.setItem('likesData', JSON.stringify(currentState));
    }
  };
  

  export const unlikePost = (id) => async (dispatch) => {
  }