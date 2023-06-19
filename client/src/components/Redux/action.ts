import { Dispatch } from 'redux';
import { GET_ALL_POST, GetPostsAction, FILTER_ABC } from './types';
// import data from '../../assets/infoHomePost';
import axios from 'axios';
import { ActionTypes } from './types';

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

//

// export const addHomePosts = (post: any): AddPostsAction => {
//     const endpoint = 'http://127.0.0.1:8000/codec/api/post/'
//     const add = axios.post(endpoint, post);
//     return {
//         type: 'ADD_POST',
//         payload: post,
//     };
// };


export const filterAbc = (payload: any) => {
    return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
        const endpoint = 'http://127.0.0.1:8000/codec/api/post/?ordering=title/';
        const { data } = await axios.get(endpoint);
        dispatch({
            type: FILTER_ABC,
            payload: data,
        });
    };
};
