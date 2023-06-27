import {configureStore} from '@reduxjs/toolkit'
import {HomeSlice} from './Reducer/HomeReducer'
export default configureStore ( {
    reducer:{
        home: HomeSlice.reducer, 
    }
})