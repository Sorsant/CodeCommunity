// reducers.ts
import { GET_ALL_POST, FILTER_ABC, GET_ALL_LANGUAGES, POST_USER } from './action-types';

const initialState = {
    posts: [],
    posteoFilter: [],
    languages: []
};

const reducer = (state = initialState, { type, payload }) => {
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

        case GET_ALL_LANGUAGES: //Trae todos los lenguages de la DB
            return {
                ...state,
                languages: payload
            }
        case POST_USER: 
            return {
                ...state
            }


        default:
            return state;
    }
};

export default reducer