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
export const likePost = () => async (dispatch) => {
    const url = await axios.get(
      "https://codecommunity-production.up.railway.app/codec/api/post/");
      dispatch(allLikesPost(url));
  }
  
  export const addlikePost = (post) => async (dispatch) => {
    const url = await axios.post(
      "https://codecommunity-production.up.railway.app/codec/api/post/",
      post
    );
    return url;
  }
  export const unlikePost = (id) => async (dispatch) => {
    const url = await axios.delete(
      `https://codecommunity-production.up.railway.app/codec/api/post/${id}`,
      id
    );
    return url;
  }