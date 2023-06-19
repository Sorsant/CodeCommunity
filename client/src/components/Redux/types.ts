// types.ts
export const GET_ALL_POST = 'GET_ALL_POST';
export const GET_BY_NAME = "GET_BY_NAME";
// export const ADD_POST = 'ADD_POST';

export interface Post {
    user: number;
    title: string;
    description: string;
    image: string;
    created: string;
}

export interface AppState {
    posts: Post[];
}


export interface GetPostsAction {
    type: typeof GET_ALL_POST;
    payload: Post[];
}
// export interface AddPostsAction {
//     type: typeof ADD_POST;
//     payload: Post[];
// }
export type ActionTypes = GetPostsAction;
//| AddPostsAction