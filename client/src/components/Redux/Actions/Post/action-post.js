import { POST_COMMUNITY } from '../../action-types';

import axios from 'axios';

export const addHomePosts = (post) => {
    return async function () {
        const url = await axios.post("https://codecommunity-production.up.railway.app/codec/api/post/", post)
        console.log(url)
        return url
    }
};

export const addCommunity = (community) => {
    return async function () {
        const url = await axios.post("https://codecommunity-production.up.railway.app/codec/api/community/", community)
        console.log(url)
        return url
    }
};


export const addNews = (payload) => {
    return async function (dispatch) {
        const url = await axios.post("https://codecommunity-production.up.railway.app/codec/api/news/", payload)
        console.log({ payload })
        return url
    }
}

export const postUser = (payload) => { //Crea un User (posteo)
    return async () => {
        try {
            let createUser = await axios.post('https://codecommunity-production.up.railway.app/codec/api/user/', payload);
            console.log(createUser);
            alert('The User was created!');
            return createUser;
        } catch (error) {
            alert("This User already exists...")
            console.log(error);
        }
    };
};