import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './Reducer/HomeReducer'
import newsSlice from './Reducer/NewsReducer'
export default configureStore({
    reducer: {
        home: homeSlice,
        news: newsSlice
    }
})