export interface Post {
    id: number;
    user_imagen: string;
    nickname: string;
    description: string;
    titulo: string;
    imagen: string;
    createDate: string;
    gitHub: string;
    likes: number;
}

export interface AppState {
    posts: Post[];
    posteoFilter: Post[];
}

export const GET_ALL_POST = 'GET_ALL_POST';
export const GET_BY_NAME = "GET_BY_NAME";
export const FILTER_ABC = "FILTER_ABC";

export interface GetPostsAction {
    type: typeof GET_ALL_POST;
    payload: Post[];
}

export interface GetFilterABC {
  type: typeof FILTER_ABC;
  payload: Post[];
}

export type ActionTypes = GetFilterABC | GetPostsAction;
