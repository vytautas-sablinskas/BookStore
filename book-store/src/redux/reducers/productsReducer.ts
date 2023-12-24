import { Product } from '../../Shared/EntityInterfaces';
import { SetProductsAction, SET_PRODUCTS } from '../../Shared/ReduxInterfaces';

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