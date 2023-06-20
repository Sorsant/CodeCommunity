import { Reducer } from 'redux';
import { ActionTypes, AppState, GET_ALL_POST, FILTER_ABC } from '../types';

const initialState: AppState = {
  posts: [],
};

export const rootReducer: Reducer<AppState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
        posteoFilter: [], // Actualiza correctamente la propiedad posteoFilter en cada caso
      };
    case FILTER_ABC:
      return {
        ...state,
        posteoFilter: [], // Actualiza correctamente la propiedad posteoFilter en cada caso
      };
    default:
      return state;
  }
};
