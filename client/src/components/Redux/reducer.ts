// reducers.ts
import { AppState, ActionTypes, GET_ALL_POST } from './types';

const initialState: AppState = {
    posts: [],
};

export const rootReducer = (state = initialState, action: ActionTypes): AppState => {
    switch (action.type) {
        case GET_ALL_POST:
            return {
                ...state,
                posts: action.payload,
            };
        // case ADD_POST: {
        //     return {
        //         ...state,
        //         posts: action.payload
        //     }
        // }
        default:
            return state;
    }
};
