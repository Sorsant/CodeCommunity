// reducers.ts
import { GET_ALL_POST, FILTER_AZ,FILTER_ZA } from './action-types';

const initialState = {
    posts: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POST:
            return {
                ...state,
                posts: payload,
            };

        case FILTER_AZ: {
            return {
                ...state,
                posts: payload,
            };
        }
        case FILTER_ZA:{
            return{
                ...state,
                posts: payload
            };
        }
        default:
            return state;
    }
};

export default reducer