import { Order, Product, ShoppingCartItemEntity } from "./EntityInterfaces";

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_ITEM_TO_SHOPPING_CART = 'ADD_ITEM_TO_SHOPPING_CART';
export const REMOVE_ITEM_FROM_SHOPPING_CART = 'REMOVE_ITEM_FROM_SHOPPING_CART';
export const SET_ITEM_AMOUNT_IN_SHOPPING_CART = 'SET_ITEM_AMOUNT_IN_SHOPPING_CART';
export const RESET_SHOPPING_CART = 'RESET_SHOPPING_CART';
export const ADD_ORDER = 'ADD_ORDER';

export interface SetProductsAction {
    type: typeof SET_PRODUCTS;
    payload: Product[];
}

export interface OrderAction {
    type: typeof ADD_ORDER;
    payload: Order
}

export type ShoppingCartAction =
  | { type: typeof ADD_ITEM_TO_SHOPPING_CART; payload: ShoppingCartItemEntity }
  | { type: typeof REMOVE_ITEM_FROM_SHOPPING_CART; payload: { itemId: number } }
  | { type: typeof SET_ITEM_AMOUNT_IN_SHOPPING_CART; payload: { itemId: number; amount: number } }
  | { type: typeof RESET_SHOPPING_CART };

export interface AddItemToShoppingCartAction {
    type: typeof ADD_ITEM_TO_SHOPPING_CART;
    payload: ShoppingCartItemEntity;
  }
  
export interface RemoveItemFromShoppingCartAction {
    type: typeof REMOVE_ITEM_FROM_SHOPPING_CART;
    payload: number;
}
  
export interface SetItemAmountInShoppingCartAction {
    type: typeof SET_ITEM_AMOUNT_IN_SHOPPING_CART;
    payload: {
      itemId: number;
      amount: number;
    };
}
  
export interface ResetShoppingCartAction {
    type: typeof RESET_SHOPPING_CART;
}

export interface ShoppingCartState {
    shoppingCart: ShoppingCartItemEntity[];
}

export interface ProductState {
    products: Product[];
}