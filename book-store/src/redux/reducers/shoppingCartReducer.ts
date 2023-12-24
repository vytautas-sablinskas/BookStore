import { ShoppingCartItemEntity } from '../../shared/EntityInterfaces';
import {
  ADD_ITEM_TO_SHOPPING_CART,
  REMOVE_ITEM_FROM_SHOPPING_CART,
  SET_ITEM_AMOUNT_IN_SHOPPING_CART,
  RESET_SHOPPING_CART,
  ShoppingCartAction,
} from '../../shared/ReduxInterfaces';

const initialState: ShoppingCartItemEntity[] = [];

const addItemToCart = (state: ShoppingCartItemEntity[], payload: ShoppingCartItemEntity): ShoppingCartItemEntity[] => {
  const existingItemIndex = state.findIndex(item => item.id === payload.id);

  if (existingItemIndex === -1) {
    const newItem = { ...payload, amount: Math.min(payload.amount, 100) };
    return [...state, newItem];
  }

  const updatedAmount = state[existingItemIndex].amount + payload.amount;
  const adjustedAmount = updatedAmount > 100 ? 100 : updatedAmount;

  const updatedItem: ShoppingCartItemEntity = {
    ...state[existingItemIndex],
    amount: adjustedAmount,
  };

  return state.map(item => (item.id === payload.id ? updatedItem : item));
};

const removeItemFromCart = (state: ShoppingCartItemEntity[], itemId: number): ShoppingCartItemEntity[] => {
  console.log("Current state:", state);
  console.log("Item to remove:", itemId);

  const newState = state.filter(item => item.id !== itemId);

  console.log("New state:", newState);

  return newState;
};

const setItemAmountInCart = (
  state: ShoppingCartItemEntity[],
  itemId: number,
  amount: number
): ShoppingCartItemEntity[] => {
  const existingItemIndex = state.findIndex(item => item.id === itemId);
  if (existingItemIndex === -1) return state;

  const updatedItem: ShoppingCartItemEntity = {
    ...state[existingItemIndex],
    amount: amount,
  };

  return state.map(item => (item.id === itemId ? updatedItem : item));
};

const resetShoppingCart = (): ShoppingCartItemEntity[] => {
  return [];
};

const shoppingCartReducer = (
  state: ShoppingCartItemEntity[] = initialState,
  action: ShoppingCartAction
): ShoppingCartItemEntity[] => {
  switch (action.type) {
    case ADD_ITEM_TO_SHOPPING_CART:
      return addItemToCart(state, action.payload);
    case REMOVE_ITEM_FROM_SHOPPING_CART:
      return removeItemFromCart(state, action.payload.itemId);
    case SET_ITEM_AMOUNT_IN_SHOPPING_CART:
      return setItemAmountInCart(state, action.payload.itemId, action.payload.amount);
    case RESET_SHOPPING_CART:
      return resetShoppingCart();
    default:
      return state;
  }
};

export default shoppingCartReducer;
