import { GET_ALL_POST, FILTER_AZ, FILTER_ZA } from '../../action-types';

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