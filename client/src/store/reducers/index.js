import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const reducers = combineReducers({
    auth: authReducer,
    error: errorReducer
});

export default reducers;


