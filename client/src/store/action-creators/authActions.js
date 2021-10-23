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
} from './types';
import { returnErrors } from './errorActions';
// import { useDispatch } from 'react-redux';




export const setUserLoading = () => {
    return (dispatch) => {
        return dispatch({ type: USER_LOADING })
    }
}

export const setUserLoaded = (userData) => {
    return (dispatch) => {
        return dispatch({ type: USER_LOADED,
            payload: userData
        })
    }
}

export const setAuthError = () => {
    return (dispatch) => {
        return dispatch({ 
            type: AUTH_ERROR
        })
    }
}

// export const setRegisterSuccess = (userData) => {
//     return (dispatch) => {
//         return dispatch({ 
//             type: REGISTER_SUCCESS,
//             payload: userData
//         })
//     }
// }

// export const setRegisterFail = () => {
//     return (dispatch) => {
//         return dispatch({ 
//             type: REGISTER_FAIL
//         })
//     }
// }

export const register = ({name, email, password }) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    const body = JSON.stringify({ name, email, password })

    axios.post('/api/auth/register', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const login = ({name, email, password }) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    const body = JSON.stringify({ name, email, password })

    axios.post('/api/auth/login', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if(token) {
        config.headers['x-auth-token'] = token;
    }
    return config
}