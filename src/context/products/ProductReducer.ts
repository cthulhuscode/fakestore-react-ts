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

    case ActionTypes.CHANGE_CART_PRODUCT_QUANTITY:
      const cartProduct: IProduct = state.products.find(
        (p: IProduct) => p.id === action.payload.id
      )!;

      const cartProductModified = {
        ...state.cart![action.payload.id],
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity * cartProduct.price,
      };

      return {
        ...state,
        cart: { ...state.cart, [action.payload.id]: cartProductModified },
      };

    case ActionTypes.ADD_PRODUCT_TO_CART:
      // If cart is null
      if (!state.cart) {
        const { products } = state;
        const { id, quantity } = action.payload;
        const product: IProduct = products.find((p: IProduct) => p.id === id)!;

        const newCart: {
          [key: number]: {
            product: IProduct;
            quantity: number;
            totalPrice: number;
          };
        } = {};
        newCart[id] = {
          product,
          quantity: quantity,
          totalPrice: quantity * product.price,
        };

        return {
          ...state,
          cart: newCart,
        };

        // If cart already has the same product
      } else if (state.cart[action.payload.id]) {
        const { cart, products } = state;
        const { id, quantity } = action.payload;
        const product: IProduct = products.find((p: IProduct) => p.id === id)!;

        const modifiedCart = {
          ...cart![id],
          quantity: cart![id].quantity + quantity,
          totalPrice: (cart![id].quantity + quantity) * product.price,
        };

        return {
          ...state,
          cart: { ...cart, [id]: modifiedCart },
        };

        // If cart doesn't have the product yet
      } else {
        const { products, cart } = state;
        const { id, quantity } = action.payload;
        const product: IProduct = products.find((p: IProduct) => p.id === id)!;
        const newCartItem = {
          product,
          quantity: quantity,
          totalPrice: quantity * product.price,
        };

        return {
          ...state,
          cart: { ...cart, [id]: newCartItem },
        };
      }

    case ActionTypes.DELETE_PRODUCT_FROM_CART:
      const newCart = state.cart!;
      delete newCart[action.payload];
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};
