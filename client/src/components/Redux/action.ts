// actions.ts
import { Dispatch } from 'redux';
import { GET_ALL_POST, GetPostsAction, Post } from './types';
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
    try {
        const endpoint = 'http://127.0.0.1:8000/codec/api/post/'

        return async (dispatch: Dispatch<GetPostsAction>) => {
            const { data } = await axios.get(endpoint);

            return dispatch({
                type: GET_ALL_POST,
                payload: data,
            });


        };
    } catch (error) {
        throw new Error();
    }
}


