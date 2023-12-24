import { Product } from '../../shared/EntityInterfaces';
import { SetProductsAction, SET_PRODUCTS } from '../../shared/ReduxInterfaces';

const initialState: Product[] = [];

const productsReducer = (state: Product[] = initialState, action: SetProductsAction) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;