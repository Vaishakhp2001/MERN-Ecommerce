import { GET_PRODUCT_ERR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../constants/productConstants";

export const getProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case GET_PRODUCT_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};