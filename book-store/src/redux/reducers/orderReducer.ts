import { ADD_ORDER, OrderAction } from "../../Shared/ReduxInterfaces";
import { Order } from "../../Shared/EntityInterfaces";

const initialState : Order[] = [];

const orderReducer = (state: Order[] = initialState, action: OrderAction) => {
  switch (action.type) {
    case ADD_ORDER:
        return [...state, action.payload];
    default:
      return state;
  }
};

export default orderReducer;