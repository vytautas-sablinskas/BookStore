import { Product } from '../../shared_components/EntityInterfaces';
import { SetProductsAction, SET_PRODUCTS } from '../../shared_components/ReduxInterfaces';

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