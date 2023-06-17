// actions.ts
import { Dispatch } from 'redux';
import { GET_ALL_POST, GetPostsAction, Post } from './types';
import data from '../../assets/infoHomePost';

export const getPosts = () => (dispatch: Dispatch<GetPostsAction>) => {
    const hardcodedPosts: Post[] = data;

    dispatch({
        type: GET_ALL_POST,
        payload: hardcodedPosts,
    });
};
