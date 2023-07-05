import axios from 'axios';
import {
    getallNews,
    getallCategory
} from '../../Reducer/NewsReducer';

import { API_URL } from '../../../../config';

export const getNews = () => async (dispatch) => {
    const endpoint = `${API_URL}/codec/api/news/`;
    const { data } = await axios.get(endpoint);
    dispatch(getallNews(data));
};

export const getCategories = () => async (dispatch) => {
    const endpoint = `${API_URL}/codec/api/category/`
    const { data } = await axios.get(endpoint);
    dispatch(getallCategory(data));
}

export const addNews = (postNews) => async () => {
    const url = await axios.post(`${API_URL}/codec/api/news/`, postNews )
       return url
    }
