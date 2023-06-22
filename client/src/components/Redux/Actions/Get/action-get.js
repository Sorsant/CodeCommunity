import { GET_ALL_POST, FILTER_AZ,FILTER_ZA, FILTER_PUBLICATIONS, GET_USER } from '../../action-types';

import axios from 'axios';

export const getHomePosts = () => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/' 
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: GET_ALL_POST,
            payload: data,
        });
    }
}
export const filterAZ = () => {
   
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/?ordering=title';
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: FILTER_AZ,
            payload: data,
        });
    }
};

export const filterZA = () => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/?ordering=-title'
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: FILTER_ZA,
            payload: data,
        });
    }
}
export const getUser = (user) => { // en user iria el usuario de la db cargado
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/user/2'
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: GET_USER,
            payload: data,
        });
    }
}
export const filterPublications = (payload) => {
    return {
      type: FILTER_PUBLICATIONS,
      payload,
    };
  };

