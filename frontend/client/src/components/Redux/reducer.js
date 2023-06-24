// reducers.ts
import { 
    GET_ALL_POST,
    FILTER_AZ,
    FILTER_ZA,
    ADD_POST, 
    FILTER_PUBLICATIONS,
    GET_ALL_LANGUAGES,
    POST_USER,
    SEARCH,
    REGISTER_PENDING,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_FAILURE,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_PENDING,
    LOGOUT_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_PENDING,
    GET_USER_SUCCESS,
    CHECK_AUTH_FAILURE,
    CHECK_AUTH_PENDING
    ,CHECK_AUTH_SUCCESS,
    RESET_REGISTERED
 } from './action-types';

const initialState = {
    isAuthenticated: false,
	user: false,
	loading: false,
	registered: false,
    posts: [],
    addPost: [],   
    languages: []
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
        case FILTER_ZA: {
        return {
        ...state,
        posts: payload
        }
        }
        case ADD_POST: {
        return {
        ...state,
        };
        }
        case GET_ALL_LANGUAGES:
        return {
        ...state,
        languages: payload
        }
        case POST_USER:
        return {
        ...state
        }
        case FILTER_PUBLICATIONS: {
        const sortedPosts = [...state.posts];

        if (payload === "news") {
        sortedPosts.sort((a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);
        return dateB - dateA;
        });
        }

        if (payload === "old") {
        sortedPosts.sort((a, b) => {
        const dateA = new Date(a.created);
        const dateB = new Date(b.created);

        return dateA - dateB;
        });
        }

        return {
        ...state,
        posts: sortedPosts,
        };
        }
        case SEARCH: {
        return {
        ...state,
        posts: payload
        }
        }
       
        case REGISTER_PENDING:
		case LOGIN_PENDING:
		case GET_USER_PENDING:
		case CHECK_AUTH_PENDING:
		case LOGOUT_PENDING:
			return { ...state, loading: true };
		case REGISTER_SUCCESS:
			return { ...state, loading: false, registered: true };
		case LOGIN_SUCCESS:
			return { ...state, loading: false, isAuthenticated: true };
		case GET_USER_SUCCESS:
			return { ...state, loading: false, user: payload };
		case CHECK_AUTH_SUCCESS:
			return { ...state, loading: false, isAuthenticated: true };
		case LOGOUT_SUCCESS:
			return { ...state, loading: false, isAuthenticated: false, user: null };
		case REGISTER_FAILURE:
		case LOGIN_FAILURE:
		case GET_USER_FAILURE:
		case CHECK_AUTH_FAILURE:
		case LOGOUT_FAILURE:
			return { ...state, loading: false };
		case RESET_REGISTERED:
			return { ...state, registered: false };

        default:
        return state;
    }
};

export default reducer