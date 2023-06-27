import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk('news/getNews', async () => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/news/';
    const response = await axios.get(endpoint);
    return response.data;
});

export const addNews = createAsyncThunk('news/addNews', async (payload) => {
    const response = await axios.post('https://codecommunity-production.up.railway.app/codec/api/news/', payload);
    console.log({ payload });
    return response.data;
});
