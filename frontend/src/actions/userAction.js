import { USER_LOGIN_ERR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_ERR, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"
import axios from 'axios';

export const loginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const { data } = await axios.post('/api/user/login', {email, password})

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        localStorage.setItem('userToken', JSON.stringify(data.token))
    } catch(error) {
        console.log("login error", error)
        dispatch({ type: USER_LOGIN_ERR, payload: error.response.data.error })
    }
}

export const registerAction = (email, password, userName) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })

        const { data } = await axios.post('/api/user/register', { email, password, userName })

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: USER_REGISTER_ERR, payload: error.response.data.error })
    }
}