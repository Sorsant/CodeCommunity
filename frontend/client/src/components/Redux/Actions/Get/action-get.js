import { GET_ALL_LANGUAGES ,GET_ALL_POST, FILTER_AZ, FILTER_ZA, FILTER_PUBLICATIONS, SEARCH,GET_USER  } from '../../action-types';

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

    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/?ordering=title/';
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: FILTER_AZ,
            payload: data,
        });
    }
};

export const filterZA = () => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/?ordering=-title/'
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: FILTER_ZA,
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

export const search = (name) => {
    const endpoint = `https://codecommunity-production.up.railway.app/codec/api/post/?search=${name}`
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        console.log(data);
        return dispatch({
            type: SEARCH,
            payload: data,
        });
    }
}

export const getUser = (user) => { // en user iria el usuario de la db cargado
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/users/users/'
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({
            type: GET_USER,
            payload: data,
        });
    }
}
export const getAllLanguages = () => { //Trae todos los lenguajes al selector para filtrar
    return async (dispatch) => {
        try {
            let url = 'https://codecommunity-production.up.railway.app/codec/api/language/';
            let json = await axios.get(url);
            return dispatch({
                type: GET_ALL_LANGUAGES,
                payload: json.data
            });
        } catch (error) {
          console.log(error);  
        };
    };
};

