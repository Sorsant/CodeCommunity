import { ADD_REGISTER, ADD_POST } from '../../action-types';

import axios from 'axios';



export const addHomePosts = (post) => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/'
    const add = axios.post(endpoint, post);
    return {
        type: ADD_POST,
        payload: add,
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
