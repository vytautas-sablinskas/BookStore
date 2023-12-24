import { Product } from '../../Shared/EntityInterfaces';
import { SET_PRODUCTS } from '../../Shared/ReduxInterfaces';

export const setProducts = (products : Product[]) => {
    return {
      type: SET_PRODUCTS,
      payload: products
    };
};