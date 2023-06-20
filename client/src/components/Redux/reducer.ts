// reducers.ts
import { AppState, ActionTypes, GET_ALL_POST, FILTER_ABC } from './types';

const initialState: AppState = {
    posts: [],
    filterABC: [],
};

export const rootReducer = (state = initialState, action: ActionTypes): AppState => {
    switch (action.type) {
        case GET_ALL_POST:
            return {
                ...state,
                posts: action.payload,
                filterABC: action.payload
            };

        case FILTER_ABC: {
            let orderName = [...state.filterABC];

            // if (action.payload === "a-z") {
            //     orderName = orderName.sort((a, b) => a.title.localeCompare(b.title));
            // } else if (action.payload === "z-a") {
            //     orderName = orderName.sort((a, b) => b.title.localeCompare(a.title));
            // }

            return {
                ...state,
                filterABC: orderName,
            };
        }


        default:
            return state;
    }
};
