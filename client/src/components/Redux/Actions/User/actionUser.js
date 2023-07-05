import axios from "axios";
import { getUser, getUserExtra } from "../../Reducer/HomeReducer";
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
export const putUserExtras = (id, InfoUserExtra) => async (dispatch) => {
  console.log(InfoUserExtra);

  const endpoint = `${API_URL}/codec/api/user_extras/${id}/`;

  const { data } = await axios.patch(endpoint, InfoUserExtra);
};

export const editUser = (id, putUser) => async (dispatch) => {
  console.log(putUser);

  const endpoint = `${API_URL}/codec/api/users/${id}/`;

  const { data } = await axios.patch(endpoint, putUser);
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
