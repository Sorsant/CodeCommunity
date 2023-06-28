import axios from "axios";
import {
    getUser,
    getUserExtra
} from '../../Reducer/HomeReducer';

export const getUsers = () => async (dispatch) => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/users/';
    const { data } = await axios.get(endpoint);
    dispatch(getUser(data));
};

export const getUserId = (id) => async (dispatch) => {
    const endpoint = `https://codecommunity-production.up.railway.app/codec/api/users/${id}`;
    const { data } = await axios.get(endpoint);
    dispatch(getUser(data));
};

export const getUserExtras = () => async (dispatch) => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/user_extras/';
    const { data } = await axios.get(endpoint);
    dispatch(getUserExtra(data));
};
