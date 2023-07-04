import axios from "axios";
import {
    getUser,
    getUserExtra
} from '../../Reducer/HomeReducer';

export const getUsers = () => async (dispatch) => {
    const endpoint = '/codec/api/users/';
    const { data } = await axios.get(endpoint);
    dispatch(getUser(data));
};

export const getUserId = (id) => async (dispatch) => {
    const endpoint = `/codec/api/users/${id}`;
    const { data } = await axios.get(endpoint);
    console.log(data);
    dispatch(getUser(data));
};

export const getUserExtras = () => async (dispatch) => {
    const endpoint = '/codec/api/user_extras/';
    const { data } = await axios.get(endpoint);
    dispatch(getUserExtra(data));
};
export const putUserExtras = (id,InfoUserExtra) => async (dispatch) => {
    console.log(InfoUserExtra);
    const endpoint = `/codec/api/user_extras/${id}/`;
    const { data } = await axios.patch(endpoint,InfoUserExtra);
   
};

export const editUser = (id,putUser) => async (dispatch) => {
    console.log(putUser);
    const endpoint = `/codec/api/users/${id}/`;
    const { data } = await axios.patch(endpoint,putUser);
   
};