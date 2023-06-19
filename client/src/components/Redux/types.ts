// types.ts
export const GET_ALL_POST = 'GET_ALL_POST';
export const GET_BY_NAME = "GET_BY_NAME";
export const FILTER_ABC = "FILTER_ABC";
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
    posteoFilter: Post[];
}



export interface GetPostsAction {
    type: typeof GET_ALL_POST;
    payload: Post[];
}

export interface GetFilterABC {
  type: typeof FILTER_ABC;
  payload: Post[];
}

export type ActionTypes = GetFilterABC | GetPostsAction;
// export interface AddPostsAction {
//     type: typeof ADD_POST;
//     payload: Post[];
// }

