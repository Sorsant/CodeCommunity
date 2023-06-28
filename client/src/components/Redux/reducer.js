
const initialState = {
  posts: [],
  addPost: [],
  languages: [],
  communities: [],
  category: [],
  news: [],
  users: [],
  login: false,
  userExtra: [],
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: null,
  user: null
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

    case FAKE_BUTTON: {
      return {
        ...state,
        loggin: payload,
      };
    }
    case FAKE_LOGGIN: {
      return {
        ...state,
        loggin: payload,
      };
    }
    case GET_USER_EXTRA: {
      return {
        ...state,
        userExtra: payload,
      };
    }
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      }
    case LOGIN_SUCCESS:
    case GOOGLE_AUTH_SUCCESS:
    case FACEBOOK_AUTH_SUCCESS:
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh', payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      }
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload
      }
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false
      }
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null
      }
    case GOOGLE_AUTH_FAIL:
    case FACEBOOK_AUTH_FAIL:
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null
      }
    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case PASSWORD_RESET_CONFIRM_FAIL:
    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default reducer;
