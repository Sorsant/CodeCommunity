import axios from "axios";
import {
    getUser,
    getUserExtra,
    resetUser,
    resetUserExtra,
    allLikesPost
} from '../../Reducer/HomeReducer';
import { API_URL } from "../../../../config";
export const getUsers = () => async (dispatch) => {
    const endpoint = `${API_URL}/codec/api/users/`;
    const { data } = await axios.get(endpoint);
    dispatch(getUser(data));
};

export const getUserId = (id) => async (dispatch) => {
    const endpoint = `${API_URL}/codec/api/users/${id}`;
    const { data } = await axios.get(endpoint);
    dispatch(getUser(data));
};

export const getUserExtras = () => async (dispatch) => {
    const endpoint = `${API_URL}/codec/api/user_extras/`;
    const { data } = await axios.get(endpoint);
    dispatch(getUserExtra(data));
};

export const putUserExtras = (id, InfoUserExtra) => async () => {
    console.log(InfoUserExtra);
    const endpoint = `${API_URL}/codec/api/user_extras/${id}/`;
    await axios.patch(endpoint, InfoUserExtra);
};

export const editUser = (id,putUser) => async (dispatch) => {
    console.log(putUser);

    const endpoint = `${API_URL}/codec/api/users/${id}/`;

    const { data } = await axios.patch(endpoint,putUser);
   
};
export const addlikePost = (postId, userId, posts) => async (dispatch, getState) => {
    const loggedInUserId = localStorage.getItem("id");
    if (loggedInUserId) {
      dispatch(allLikesPost({ postId, userId })); 
      const post = posts.find((post) => post.id === postId);
      if (post) {
        post.likes.push(userId);
      }
      console.log(postId, userId, "entre a addlike");
      const currentState = getState().home.posts;
      localStorage.setItem('likesData', JSON.stringify(currentState));
    }
  };
  
  export const unlikePost = (id) => async (dispatch) => {
  }
  export const resetPostData = () => async (dispatch) => {
    dispatch(resetUser());
    dispatch(resetUserExtra());
}