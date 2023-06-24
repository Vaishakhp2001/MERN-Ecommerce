import { ADD_TO_CART_ERR, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_ERR, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ERR, REMOVE_CART_REQUEST, REMOVE_CART_SUCCESS } from "../constants/cartConstants";

export const addToCartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                addedProduct: action.payload,
            };
        case ADD_TO_CART_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export const getCartReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CART_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
            };
        case GET_CART_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export const removeCartReducer = (state = {}, action) => {
    switch (action.type) {
        case REMOVE_CART_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REMOVE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                removedProduct: action.payload,
            };
        case REMOVE_CART_ERR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}