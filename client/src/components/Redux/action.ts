// actions.ts
import { Dispatch } from 'redux';
import { GET_ALL_POST, GetPostsAction, Post, FILTER_ABC, GetFilterABC } from './types';
import data from '../../assets/infoHomePost';

export const getPosts = () => (dispatch: Dispatch<GetPostsAction>) => {
    const hardcodedPosts: Post[] = data;

    dispatch({
        type: GET_ALL_POST,
        payload: hardcodedPosts,
    });
};
export const filterAbc = (dispatch: Dispatch<GetFilterABC>) => {
    const hardcodedPosts: Post[] = data;
    dispatch ({
               type: FILTER_ABC,
                payload: hardcodedPosts,
            });
}
