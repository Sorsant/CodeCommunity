import { GET_ALL_POST, FILTER_ABC, ADD_REGISTER,ADD_POST } from './action-types';
import axios from 'axios';

export const getHomePosts = () => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/'
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: GET_ALL_POST,
            payload: data,
        });
    }
}

//

export const addHomePosts = (post)  => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/'
    const add = axios.post(endpoint, post);
    return {
        type: 'ADD_POST',
        payload: post,
    };
};


export const filterAbc = (payload) => {
    return async (dispatch) => {
        const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/?ordering=title/';
        const { data } = await axios.get(endpoint);
        dispatch({
            type: FILTER_ABC,
            payload
        });
    };
};
export const addRegister = (register) => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/user/'

    const data = axios.post(endpoint, register);
    return {
        type: ADD_REGISTER,
        payload: data
    };

}
