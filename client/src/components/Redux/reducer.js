// reducers.ts
import { GET_ALL_POST, FILTER_ABC } from './action-types';

const initialState = {
    posts: [],
    posteoFilter: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POST:
            return {
                ...state,
                posts: payload,
                filterABC: payload
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
