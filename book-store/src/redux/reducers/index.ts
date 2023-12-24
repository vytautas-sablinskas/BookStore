import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import shoppingCartReducer from './shoppingCartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer
});

export default rootReducer;