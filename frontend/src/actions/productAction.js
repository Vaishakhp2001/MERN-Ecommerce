import axios from 'axios';
import { GET_PRODUCT_ERR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from '../constants/productConstants';

export const getProducts = () => async(dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST })
        const { data } = await axios.get('/api/product/get');
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data.products });
    } catch(error) {
        dispatch({ type: GET_PRODUCT_ERR, payload: error.response.data })
    }
}
