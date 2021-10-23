import axios from 'axios';

export const checkUserToken = token => {
    return axios.get('/api/auth/user', token )
}

export const signUp =  userData => {
    return axios.post('/api/auth/register', userData)
}

export default {
    checkUserToken
}