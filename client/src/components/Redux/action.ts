// actions.ts
import { Dispatch } from 'redux';
import { GET_ALL_POST, GetPostsAction, FILTERABC, FilterAction } from './types';
// import data from '../../assets/infoHomePost';
import axios from 'axios';

// export const getPosts = () => (dispatch: Dispatch<GetPostsAction>) => {
//     const hardcodedPosts: Post[] = data;

//     dispatch({
//         type: GET_ALL_POST,
//         payload: hardcodedPosts,
//     });
// };

export const getHomePosts = () => {

    const endpoint = 'http://127.0.0.1:8000/codec/api/post/'

    return async (dispatch: Dispatch<GetPostsAction>) => {
        const { data } = await axios.get(endpoint);

        return dispatch({
            type: GET_ALL_POST,
            payload: data,
        });
    };

}

export const filter = (payload: any) => {
    return {
        type: FILTERABC,
        payload: payload
    }
}
// export const addHomePosts = (post: FormPost): AddPostsAction =>  {

//     const endpoint = 'http://127.0.0.1:8000/codec/api/post/'
//     return async (dispatch: Dispatch<AddPostsAction>) => {
//         const { data } = await axios.post(endpoint, post);
//         return dispatch({
//             type: ADD_POST,
//             payload: data
//         })
//     }


// }

// export const addHomePosts = (post: any): AddPostsAction => {
//     const endpoint = 'http://127.0.0.1:8000/codec/api/post/'
//     const add = axios.post(endpoint, post);
//     return {
//         type: 'ADD_POST',
//         payload: post,
//     };
// };


