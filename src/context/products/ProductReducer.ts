import type { Action } from "./ProductActions";
import { ActionTypes } from "./ProductActions";
import { IProduct } from "../../interfaces/IProduct";
import { Store } from "./ProductState";

export default (state: Store, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ActionTypes.SHOW_CART:
      return {
        ...state,
        showCart: action.payload,
      };

    case ActionTypes.ADD_PRODUCT_TO_CART:
      const { id, quantity } = action.payload;

      if (!state.cart) {
        const products = state.products;
        const product: IProduct = products.find((p: IProduct) => p.id === id)!;

        return {
          ...state,
          cart: { id: { product, quantity: 1 } },
        };
      } else if (state.cart![id]) {
        return {
          ...state,
          cart: {
            ...state.cart,
            id: {
              ...state.cart![id],
              quantity: state.cart![id].quantity++,
            },
          },
        };
      } else {
        const { products } = state;

        const product: IProduct = products.find((p: IProduct) => p.id === id)!;

        const cart = {
          ...state.cart,
          id: {
            product: product,
            quantity: 1,
          },
        };

        return {
          ...state,
          cart: cart,
        };
      }

    case ActionTypes.DELETE_PRODUCT_FROM_CART:

    default:
      return state;
  }
};
