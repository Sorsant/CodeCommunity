import axios from "axios";
import { getUser, getUserExtra, resetUser, resetUserExtra, allLikesPost } from "../../Reducer/HomeReducer";
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

export const editUser = (id, putUser) => async (dispatch) => {
   console.log(putUser);
   const endpoint = `${API_URL}/codec/api/users/${id}/`;
   await axios.patch(endpoint, putUser);
};

export const addlikePost = (id, posts) => async (dispatch) => {
   console.log("soy el id", id, "DEl post");
   console.log("soy el like del posteo:", posts, "DEl post");
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
