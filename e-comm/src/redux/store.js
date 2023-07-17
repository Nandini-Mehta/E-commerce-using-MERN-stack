import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer , getProductDetailReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetail: getProductDetailReducer,
    cart: cartReducer
});

const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;