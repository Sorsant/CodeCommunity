import axios from 'axios';
import {
    getallNews,
    getallCategory
} from '../../Reducer/NewsReducer';

// // export const getNews = ('news/getNews', async () => {
// //     const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/news/';
// //     const { data } = await axios.get(endpoint);
// //     dispatch(getallNews(data));
// // });

export const getNews = () => async (dispatch) => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/news/';
    const { data } = await axios.get(endpoint);
    dispatch(getallNews(data));
};

export const getCategories = () => async (dispatch) => {
    const endpoint = "https://codecommunity-production.up.railway.app/codec/api/category/"
    const { data } = await axios.get(endpoint);
    dispatch(getallCategory(data));
}

// export const addNews = ('news/addNews', async (payload) => {
//     const response = await axios.post('https://codecommunity-production.up.railway.app/codec/api/news/', payload);
   
// });
