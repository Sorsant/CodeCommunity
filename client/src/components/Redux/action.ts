import { Dispatch } from 'redux';
import { GET_ALL_POST, FILTER_ABC } from './types';
import axios from 'axios';
import { ActionTypes } from './types';

export const getHomePosts = () => {
  return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
    const endpoint = 'http://127.0.0.1:8000/codec/api/post/';
    const { data } = await axios.get(endpoint);
    dispatch({
      type: GET_ALL_POST,
      payload: data,
    });
  };
};

export const filterAbc = (payload: any) => {
  return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
    const endpoint = 'http://127.0.0.1:8000/codec/api/post/?ordering=title/';
    const { data } = await axios.get(endpoint);
    dispatch({
      type: FILTER_ABC,
      payload: data,
    });
  };
};
