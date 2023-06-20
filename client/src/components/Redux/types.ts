// types.ts
export const GET_ALL_POST = 'GET_ALL_POST';
export const GET_BY_NAME = "GET_BY_NAME";
export const FILTERABC = 'FILTERABC';

export interface Post {
    user: number;
    title: string;
    description: string;
    image: string;
    created: string;
}


export interface AppState {
    posts: Post[];
    filterABC: Post[];
}


export interface GetPostsAction {
    type: typeof GET_ALL_POST;
    payload: Post[];
}
export interface FilterAction {
    type: typeof FILTERABC;
    payload: Post[];
}
export type ActionTypes = GetPostsAction | FilterAction;
//| AddPostsAction