import { combineReducers } from "redux"
import {rootReducer} from "./reducer"

const combineReducer = combineReducers(
    {
        post: rootReducer 
    }
) 
export default combineReducer