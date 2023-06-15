// types.ts
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
}

export const GET_ALL_POST = 'GET_ALL_POST';

export interface GetPostsAction {
    type: typeof GET_ALL_POST;
    payload: Post[];
}

export type ActionTypes = GetPostsAction;
