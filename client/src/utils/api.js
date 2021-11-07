import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../store/action-creators/types';
import { useDispatch } from 'react-redux';


export const checkUserToken = token => {
    return axios.get('/api/auth/user', token )
}

export const signUp =  userData => {
    return axios.post('/api/auth/register', userData)
}

export default {
    checkUserToken
}