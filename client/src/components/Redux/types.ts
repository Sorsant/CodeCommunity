// types.ts
export interface Post {
    id: number;
    user_imagen: string;
    nickname: string;
    description: string;
    titulo: string;
    imagen: string;
    likes: number;
}

export interface AppState {
    posts: Post[];
}

export const GET_ALL_POST = 'GET_ALL_POST';
export const GET_BY_NAME = "GET_BY_NAME";
export const ADD_POST = 'ADD_POST';

export interface GetPostsAction {
    type: typeof GET_ALL_POST;
    payload: Post[];
}
export interface AddPostsAction {
    type: typeof ADD_POST;
    payload: Post[];
}
export type ActionTypes = GetPostsAction | AddPostsAction;
