import { Order } from "../../Shared/EntityInterfaces"
import { ADD_ORDER } from "../../Shared/ReduxInterfaces";

export const addOrder = (order : Order) => {
    return {
      type: ADD_ORDER,
      payload: order
    };
};