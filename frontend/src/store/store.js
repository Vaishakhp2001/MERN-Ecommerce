import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from '../reducers/userReducer';
import { getProductsReducer } from '../reducers/productReducer';
import { addToCartReducer, getCartReducer, removeCartReducer } from '../reducers/cartReducer';

const appReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    getProducts: getProductsReducer,
    addToCart: addToCartReducer,
    getCart: getCartReducer,
    removeCart: removeCartReducer

})

const middleware = [thunk]

export const store = createStore(appReducer, applyMiddleware(...middleware));