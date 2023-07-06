import axios from "axios";
import {
  getUser,
  getUserExtra,
  resetUser,
  resetUserExtra,
  allLikesPost,
  getReview, 
  getReview_user,
} from "../../Reducer/HomeReducer";

import { API_URL } from "../../../../config";
export const getUsers = () => async (dispatch) => {
  const endpoint = `/codec/api/users/`;
  const { data } = await axios.get(endpoint);
  dispatch(getUser(data));
};

export const getUserId = (id) => async (dispatch) => {
  const endpoint = `${API_URL}http://localhost:3001/codec/api/users/${id}`;
  const { data } = await axios.get(endpoint);
  dispatch(getUser(data));
};

export const getUserExtras = () => async (dispatch) => {
  const endpoint = `${API_URL}/codec/api/user_extras/`;
  const { data } = await axios.get(endpoint);
  dispatch(getUserExtra(data));
};

export const putUserExtras = (id, InfoUserExtra) => async () => {

  const endpoint = `${API_URL}/codec/api/user_extras/${id}/`;
  await axios.patch(endpoint, InfoUserExtra);
};

export const editUser = (id, putUser) => async (dispatch) => {

  const endpoint = `${API_URL}/codec/api/users/${id}/`;
  await axios.patch(endpoint, putUser);
};

export const addlikePost = (id, posts) => async (dispatch) => {
 
  try {
    const response = await axios.patch(`${API_URL}/codec/api/post/${id}/`, {
      likes: posts,
    });
    return response;
  } catch (error) {
    console.error("Error al cambiar la propiedad:", error);
  }
};

export const unlikePost = (postId, updatedLikes) => async (dispatch) => {
  try {
    const response = await axios.patch(`${API_URL}/codec/api/post/${postId}/`, {
      likes: updatedLikes,
    });
    return response;
  } catch (error) {
    console.error("Error al cambiar la propiedad:", error);
  }
};

export const resetPostData = () => async (dispatch) => {
  dispatch(resetUser());
  dispatch(resetUserExtra());
};
export const pay = (id) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `${API_URL}/codec/api/user_extras/${id}/`,
      {
        premium: true,
      }
    );
    return response;
  } catch (error) {
    console.error("Error al cambiar la propiedad:", error);
  }
};

export const reviewPost = (post) => async () => {
console.log(post)
  const endpoint =  `https://codecommunity-31wr.onrender.com/codec/api/review/`;
  const data = await axios.post(endpoint,post);

};

export const getReviews = () => async (dispatch) => {
  const endpoint = `${API_URL}/codec/api/review/`;
  const {data }= await axios.get(endpoint);
  console.log(data);
  dispatch(getReview(data, "review"));
};
export const getReviews_user = () => async (dispatch) => {
  const endpoint = `${API_URL}/codec/api/reviews_user/`;
  const {data }= await axios.get(endpoint);
  console.log(data);
  dispatch(getReview_user(data ,"review_data"));
};