// reducers.ts
import { GET_ALL_POST, FILTER_AZ, FILTER_ZA, ADD_POST, FILTER_PUBLICATIONS, GET_ALL_LANGUAGES, POST_USER, SEARCH, GET_COMMUNITY, GET_ALL_COMMUNITIES, GET_CATEGORY, GET_NEWS, USERS, GETPOSTID } from './action-types';

const initialState = {
    posts: [],
    addPost: [],
    languages: [],
    communities: [],
    category: [],
    news: [],
    users: []
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
        case GETPOSTID: {
            return {
                ...state,
                posts: payload
            }
        }
        case GET_COMMUNITY:
            return {
                ...state,
                communities: payload
            }
        case GET_ALL_COMMUNITIES:
            return {
                ...state,
                communities: payload
            }
        case GET_CATEGORY: {
            return {
                ...state,
                category: payload
            }
        }
        case GET_NEWS: {
            return {
                ...state,
                news: payload
            }
        }
        case USERS: {
            return {
                ...state,
                users: payload
            }
        }
        default:
            return state;
    }
};

export default reducer