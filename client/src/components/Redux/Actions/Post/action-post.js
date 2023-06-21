import { ADD_REGISTER, ADD_POST } from '../../action-types';

import axios from 'axios';



export const addHomePosts = (post) => {
return async function (dispatch) {
    const url = await axios.post("https://codecommunity-production.up.railway.app/codec/api/post/", post)
    console.log(url)
    return url
}
};



export const addRegister = (register) => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/user/'
    const data = axios.post(endpoint, register);
    return {
        type: ADD_REGISTER,
        payload: data
    };

}