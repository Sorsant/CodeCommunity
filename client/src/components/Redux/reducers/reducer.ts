import { Reducer } from 'redux';
import { GET_ALL_POST, Post, FILTER_ABC, ActionTypes } from '../types';

interface AppState {
  posts: Post[];
  posteoFilter: Post[];
}

const initialState: AppState = {
  posts: [],
  posteoFilter: [],
};

export const rootReducer: Reducer<AppState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
        posteoFilter: action.payload,
      };
    case FILTER_ABC:
      return {
        ...state,
        posteoFilter: action.payload,
      };
    default:
      return state;
  }
};
