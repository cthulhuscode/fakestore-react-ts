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
      const { products, cart } = state;
      const product: IProduct = products.find((p: IProduct) => p.id === id)!;

      // If cart is null
      if (!cart) {
        const newCart: {
          [key: number]: { product: IProduct; quantity: number };
        } = {};
        newCart[id] = { product, quantity: quantity };

        return {
          ...state,
          cart: newCart,
        };

        // If cart already has the same product
      } else if (cart[id]) {
        const modifiedCart = {
          ...cart[id],
          quantity: cart[id].quantity + quantity,
        };

        return {
          ...state,
          cart: { ...cart, [id]: modifiedCart },
        };

        // If cart doesn't have the product yet
      } else {
        const newCartItem = { product, quantity: quantity };

        return {
          ...state,
          cart: { ...cart, [id]: newCartItem },
        };
      }

    case ActionTypes.DELETE_PRODUCT_FROM_CART:

    default:
      return state;
  }
};
