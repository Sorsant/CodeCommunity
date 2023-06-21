import { ADD_REGISTER,ADD_POST } from '../../action-types';

import axios from 'axios';



export const addHomePosts = (post)  => {
    return async function (dispatch) {
        const url = await axios.post('http://127.0.0.1:8000/codec/api/post/', post)
        console.log(url)
        return url
    }
};



export const addRegister = (register) => {
    const endpoint = 'http://127.0.0.1:8000/codec/api/user/'

    const data = axios.post(endpoint, register);
    return {
        type: ADD_REGISTER,
        payload: data
    };

}
