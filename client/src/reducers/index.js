import { combineReducers } from "redux";
import auth from './auth';
import questionReducer from './questionReducer';

export const reducers =  combineReducers({
    auth,
    questionReducer
})