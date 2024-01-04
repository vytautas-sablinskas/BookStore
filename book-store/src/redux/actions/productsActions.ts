import { Product } from '../../shared_components/EntityInterfaces';
import { SET_PRODUCTS } from '../../shared_components/ReduxInterfaces';

export const setProducts = (products : Product[]) => {
    return {
      type: SET_PRODUCTS,
      payload: products
    };
};