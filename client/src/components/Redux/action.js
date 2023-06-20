import { GET_ALL_POST, FILTER_ABC, ADD_REGISTER } from './action-types';
import axios from 'axios';

export const getHomePosts = () => {
    const endpoint = 'http://127.0.0.1:8000/codec/api/post/'
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: GET_ALL_POST,
            payload: data,
        });
    }
}

//

// export const addHomePosts = (post: any): AddPostsAction => {
//     const endpoint = 'http://127.0.0.1:8000/codec/api/post/'
//     const add = axios.post(endpoint, post);
//     return {
//         type: 'ADD_POST',
//         payload: post,
//     };
// };


export const filterAbc = (payload) => {
    return async (dispatch) => {
        const endpoint = 'http://127.0.0.1:8000/codec/api/post/?ordering=title/';
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
