import { Order } from "../../shared_components/EntityInterfaces"
import { ADD_ORDER } from "../../shared_components/ReduxInterfaces";

export const addOrder = (order : Order) => {
    return {
      type: ADD_ORDER,
      payload: order
    };
};