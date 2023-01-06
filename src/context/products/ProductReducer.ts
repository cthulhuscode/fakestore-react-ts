import type { Action } from "./ProductActions";
import { ActionTypes } from "./ProductActions";
import { IProduct } from "../../interfaces/IProduct";
import { Store } from "./ProductState";

export default (state: Store, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };

    case ActionTypes.ADD_PRODUCT_TO_CART:
      const { products, cart } = state;

      const product: IProduct = products.find(
        (p: IProduct) => p.id === action.payload.id
      )!;

      cart.push(product);

      return {
        ...state,
        cart: cart,
      };

    case ActionTypes.DELETE_PRODUCT_FROM_CART:

    default:
      return state;
  }
};
