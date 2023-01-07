import { IProduct } from "../../interfaces/IProduct";

export enum ActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  SHOW_CART = "SHOW_CART",
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART",
}

export const getProducts = (
  products: IProduct[]
): {
  type: ActionTypes.GET_PRODUCTS;
  payload: IProduct[];
} => ({
  type: ActionTypes.GET_PRODUCTS,
  payload: products,
});

export const showCart = (
  showCart: boolean
): {
  type: ActionTypes.SHOW_CART;
  payload: boolean;
} => ({
  type: ActionTypes.SHOW_CART,
  payload: showCart,
});

export const addProductToCart = (
  id: number,
  quantity: number
): {
  type: ActionTypes.ADD_PRODUCT_TO_CART;
  payload: { id: number; quantity: number };
} => ({
  type: ActionTypes.ADD_PRODUCT_TO_CART,
  payload: { id, quantity },
});

export const deleteProductFromCart = (
  id: number
): {
  type: ActionTypes.DELETE_PRODUCT_FROM_CART;
  payload: {
    id: number;
  };
} => ({
  type: ActionTypes.DELETE_PRODUCT_FROM_CART,
  payload: {
    id,
  },
});

export type Action =
  | ReturnType<typeof getProducts>
  | ReturnType<typeof showCart>
  | ReturnType<typeof addProductToCart>
  | ReturnType<typeof deleteProductFromCart>;
