import { Product } from '../../shared/EntityInterfaces';
import { SET_PRODUCTS } from '../../shared/ReduxInterfaces';

export const setProducts = (products : Product[]) => {
    return {
      type: SET_PRODUCTS,
      payload: products
    };
};