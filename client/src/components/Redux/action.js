import { GET_ALL_POST, FILTER_ABC, GET_ALL_LANGUAGES } from './action-types';
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

export const postUser = (payload) => { //Crea un User (posteo)
    return async () => {
        try {
            let createUser = await axios.post('https://codecommunity-production.up.railway.app/codec/api/user/', payload);
            console.log(createUser);
            alert('The User was created!');
            return createUser;
        } catch (error) {
            alert("This User already exists...")
            console.log(error);
        }
    };
};

export const getAllLanguages = () => { //Trae todos los lenguajes al selector para filtrar
    return async (dispatch) => {
        try {
            let url = 'https://codecommunity-production.up.railway.app/codec/api/language';
            let json = await axios.get(url);
            return dispatch({
                type: GET_ALL_LANGUAGES,
                payload: json.data
            });
        } catch (error) {
          console.log(error);  
        };
    };
};
