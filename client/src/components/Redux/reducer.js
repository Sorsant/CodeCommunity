// reducers.ts
import { GET_ALL_POST, FILTER_AZ } from './action-types';

const initialState = {
    posts: [],
    filterAZ: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POST:
            return {
                ...state,
                posts: payload,
                filterAZ: payload
            };

        case FILTER_AZ: {
            return {
                ...state,
                filterAZ: payload,
            };
        }

        default:
            return state;
    }
};

export default reducer