import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        category: []
    },
    reducers: {
        getallNews: (state, action) => {
            state.news = action.payload;
        },
        getallCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const {
    getallNews,
    getallCategory
} = newsSlice.actions;

export default newsSlice.reducer;
