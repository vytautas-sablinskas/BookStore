import { ShoppingCartItemEntity } from "../../shared_components/EntityInterfaces";
import { ADD_ITEM_TO_SHOPPING_CART, REMOVE_ITEM_FROM_SHOPPING_CART, RESET_SHOPPING_CART, SET_ITEM_AMOUNT_IN_SHOPPING_CART } from "../../shared_components/ReduxInterfaces";

export const addItemToShoppingCart = (item: ShoppingCartItemEntity) => {
    return {
      type: ADD_ITEM_TO_SHOPPING_CART,
      payload: item
    };
};

export const removeItemFromShoppingCart = (itemId : number) => {
    return {
        type: REMOVE_ITEM_FROM_SHOPPING_CART,
        payload: { itemId }
      };
};

export const setItemAmountInShoppingCart = (itemId: number, newAmount: number) => {
    return {
      type: SET_ITEM_AMOUNT_IN_SHOPPING_CART,
      payload: {
        itemId: itemId,
        amount: newAmount
      }
    };
};

export const resetShoppingCart = () => {
    return {
        type: RESET_SHOPPING_CART
    };
}