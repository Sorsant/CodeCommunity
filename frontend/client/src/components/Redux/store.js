import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './Reducer/HomeReducer'
import newsSlice from './Reducer/NewsReducer'
import communitySlice from './Reducer/CommunityReducer'
import userSlice from './user'
export default configureStore({
    reducer: {
        home: homeSlice,
        news: newsSlice,
        community:communitySlice,
        userdb:userSlice
    }
})