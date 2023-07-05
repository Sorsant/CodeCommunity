import axios from "axios";
import {
  getAllPosts,
  filterAcendent,
  filterDesendent,
  filterTime,
  getPostId,
  getSearchPosts,
  loginSwitch,
  getPostComments

} from "../Reducer/HomeReducer";
import { API_URL } from "../../../config";

export const getHomePosts = () => async (dispatch) => {
  const endpoint =`${API_URL}/codec/api/post/`;
  const { data } = await axios.get(endpoint);
  const filteredData = data.filter(item => !item.is_delete);
  dispatch(getAllPosts(filteredData));
};

export const filterAZ = () => async (dispatch) => {
  const endpoint =
    `${API_URL}/codec/api/post/?ordering=title`;
  const { data } = await axios.get(endpoint);
  dispatch(filterAcendent(data));
};

export const getComments = () => async (dispatch) => {
   const endpoint = `${API_URL}/codec/api/comments/`;
   const { data } = await axios.get(endpoint);
   dispatch(getPostComments(data));
};
export const filterZA = () => async (dispatch) => {
  const endpoint =
    `${API_URL}/codec/api/post/?ordering=-title`;
  const { data } = await axios.get(endpoint);
  dispatch(filterDesendent(data));
};

export const filterPublications = (payload) => async (dispatch) => {
  dispatch(filterTime(payload));
};

export const getPostIds = (id) => async (dispatch) => {
  const endpoint = `${API_URL}/codec/api/post/${id}`;
  const { data } = await axios.get(endpoint);
  dispatch(getPostId(data));
  console.log(data);
};


export const search = (name) => async (dispatch) => {
  const endpoint = `${API_URL}/codec/api/post/?search=${name}`;
  const { data } = await axios.get(endpoint);
  dispatch(getSearchPosts(data));
};

export const addHomePosts = (post) => async (dispatch) => {
  const url = await axios.post(
    `${API_URL}/codec/api/post/`,
    post
  );
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
    const response = await axios.patch(
      `${API_URL}/codec/api/user_extras/${id}/`,
      {
        postulation: false,
      }
    );
    return response;
  } catch (error) {
    console.error("Error al cambiar la propiedad:", error);
  }
};
export const Instructor = (id) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `${API_URL}/codec/api/user_extras/${id}/`,
      {
        postulation: true,
      }
    );
    return response;
  } catch (error) {
    console.error("Error al cambiar la propiedad:", error);
  }
};

export const ImgEdit = (id,secureUrl) => async (dispatch) => {

  console.log(secureUrl)
  try {
    const response = await axios.patch(
      `${API_URL}/codec/api/user_extras/${id}/`,

      {
        user_image:secureUrl,
      }
    );
    return response;
  } catch (error) {
    console.error("Error al cambiar la propiedad:", error);
  }
};
export const deletPostid = (id) => async (dispatch) => {
  const response = await axios.patch(
    `${API_URL}/codec/api/post/${id}/`,
      {
          is_delete:true,
      }
    );
}