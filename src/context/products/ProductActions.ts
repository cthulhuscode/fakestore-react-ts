import { IProduct } from "../../interfaces/IProduct";

export enum ActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  SHOW_CART = "SHOW_CART",
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART",
  CHANGE_CART_PRODUCT_QUANTITY = "CHANGE_CART_PRODUCT_QUANTITY",
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

export const changeCartProductQuantity = (
  id: number,
  quantity: number
): {
  type: ActionTypes.CHANGE_CART_PRODUCT_QUANTITY;
  payload: { id: number; quantity: number };
} => ({
  type: ActionTypes.CHANGE_CART_PRODUCT_QUANTITY,
  payload: { id, quantity },
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
  payload: number;
} => ({
  type: ActionTypes.DELETE_PRODUCT_FROM_CART,
  payload: id,
});

export type Action =
  | ReturnType<typeof getProducts>
  | ReturnType<typeof showCart>
  | ReturnType<typeof changeCartProductQuantity>
  | ReturnType<typeof addProductToCart>
  | ReturnType<typeof deleteProductFromCart>;
