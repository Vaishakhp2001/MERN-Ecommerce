import axios from "axios";
import { ADD_TO_CART_ERR, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_ERR, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ERR, REMOVE_CART_REQUEST, REMOVE_CART_SUCCESS } from "../constants/cartConstants";

export const addToCart = (productId) => async(dispatch) => {
    try {
        const userToken = await localStorage.getItem('userToken');
        dispatch({ type: ADD_TO_CART_REQUEST })
        const config = {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
        }
        const { data } = await axios.post('/api/cart/add', {productId}, config);
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: ADD_TO_CART_ERR, payload: error.response.data });
    }
}

export const getCart = () => async(dispatch) => {
    try {
        const userToken = await localStorage.getItem('userToken');
        dispatch({ type: GET_CART_REQUEST })
        const config = {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
        }
        const { data } = await axios.get('/api/cart/get', config);
        dispatch({ type: GET_CART_SUCCESS, payload: data.products.products });
    } catch(error) {
        dispatch({ type: GET_CART_ERR, payload: error.response.data });
    }
}

export const removeCart = (productId) => async(dispatch) => { 
    try {
        const userToken = await localStorage.getItem('userToken');
        dispatch({ type: REMOVE_CART_REQUEST })
        const config = {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
        }
        const { data } = await axios.put('/api/cart/remove', { productId}, config);
        dispatch({ type: REMOVE_CART_SUCCESS, payload: data });
    } catch(error) {
        dispatch({ type: REMOVE_CART_ERR, payload: error.response.data });
    }
}