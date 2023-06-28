import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
    },
    reducers: {
        getallNews: (state, action) => {
            state.news = action.payload;
        },
    },
});

export const {
    getallNews,
} = newsSlice.actions;

export default newsSlice.reducer;
