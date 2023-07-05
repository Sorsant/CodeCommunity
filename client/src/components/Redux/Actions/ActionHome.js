import axios from "axios";
import {
   getAllPosts,
   filterAcendent,
   filterDesendent,
   filterTime,
   getPostId,
   getSearchPosts,
   loginSwitch,
   getAllComments,
   filterlikes,
} from "../Reducer/HomeReducer";
import { API_URL } from "../../../config";

export const getHomePosts = () => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/post/`;
   const { data } = await axios.get(endpoint);
   const filteredData = data.filter((item) => !item.is_delete);
   const sortedData = filteredData.sort((a, b) => new Date(b.created) - new Date(a.created));
   dispatch(getAllPosts(sortedData)); // Despachar los posts ordenados
};
export const filterAZ = () => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/post/?ordering=title`;
   const { data } = await axios.get(endpoint);
   dispatch(filterAcendent(data));
};

export const getComments = () => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/comments/`;
   const { data } = await axios.get(endpoint);
   dispatch(getAllComments(data));
};
export const filterZA = () => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/post/?ordering=-title`;
   const { data } = await axios.get(endpoint);
   dispatch(filterDesendent(data));
};

export const filterPublications = (payload) => async (dispatch) => {
   dispatch(filterTime(payload));
};

export const postComments = (payload) => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/comments/`;
   const { data } = await axios.post(endpoint, payload);
   dispatch(getAllComments(data));
};

export const getPostIds = (id) => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/post/${id}`;
   const { data } = await axios.get(endpoint);
   dispatch(getPostId(data));
   console.log(data);
};

export const filterLessLikes = () => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/post/?ordering=-likes`;
   const response = await axios.get(endpoint);
   const data = response.data;
   dispatch(filterlikes(data));
};

export const filterAllLikes = () => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/post/?ordering=likes`;
   const response = await axios.get(endpoint);
   const data = response.data;
   dispatch(filterlikes(data));
};

export const search = (name) => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/post/?search=${name}`;
   const { data } = await axios.get(endpoint);
   dispatch(getSearchPosts(data));
};

export const addHomePosts = (post) => async (dispatch) => {
   const url = await axios.post(`${API_URL}/codec/api/post/`, post);
   return url;
};

export const fakeButton = () => (dispatch) => {
   const data = false;
   dispatch(loginSwitch(data));
};
export const fakeLogin = () => (dispatch) => {
   const data = true;
   dispatch(loginSwitch(data));
};

export const uploadPost = (post, id) => async (dispatch) => {
   const url = `${API_URL}/codec/api/post/${id}/`;
   await axios.put(url, post);
   return url;
};

export const notInstructor = (id) => async (dispatch) => {
   try {
      const response = await axios.patch(`${API_URL}/codec/api/user_extras/${id}/`, {
         postulation: false,
      });
      return response;
   } catch (error) {
      console.error("Error al cambiar la propiedad:", error);
   }
};
export const Instructor = (id) => async (dispatch) => {
   try {
      const response = await axios.patch(`${API_URL}/codec/api/user_extras/${id}/`, {
         postulation: true,
      });
      return response;
   } catch (error) {
      console.error("Error al cambiar la propiedad:", error);
   }
};

export const ImgEdit = (id, secureUrl) => async (dispatch) => {
   console.log(secureUrl);
   try {
      const response = await axios.patch(
         `${API_URL}/codec/api/user_extras/${id}/`,

         {
            user_image: secureUrl,
         }
      );
      return response;
   } catch (error) {
      console.error("Error al cambiar la propiedad:", error);
   }
};
export const deletPostid = (id) => async (dispatch) => {
   const response = await axios.patch(`${API_URL}/codec/api/post/${id}/`, {
      is_delete: true,
   });
};
