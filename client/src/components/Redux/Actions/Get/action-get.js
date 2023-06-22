import { GET_ALL_POST, FILTER_AZ, FILTER_ZA, FILTER_PUBLICATIONS, SEARCH, GET_COMMUNITY, GET_ALL_COMMUNITIES } from '../../action-types';

import axios from 'axios';

import { communities } from '../../../../views/Community/CarpetaInfoProvisional/infoCommunities'; // Datos sustitutos de la DB

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

export const getAllCommunities = () => { //Trae a todas las comunidades 
    const allCommunities = communities;
    return (dispatch) => {
        return dispatch ({
            type: GET_ALL_COMMUNITIES,
            payload: allCommunities
        })
    }
}

export const getCommunity = (name) => { //Filtra las comunidades buscando la comunidad por el nombre de la misma
    const findedCommunity = communities.find((community) => community.name === name);
    return (dispatch) => {
        return dispatch ({
            type: GET_COMMUNITY,
            payload: findedCommunity
        });
    }
}


