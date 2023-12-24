import { Order } from "../../shared/EntityInterfaces";
import { ADD_ORDER } from "../../shared/ReduxInterfaces";

export const addOrder = (order : Order) => {
    return {
      type: ADD_ORDER,
      payload: order
    };
};