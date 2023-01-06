import { IProduct } from "../../interfaces/IProduct";

export enum ActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART",
}

export const getProducts = (
  products: IProduct[]
): {
  type: ActionTypes.GET_PRODUCTS;
  payload: {
    products: IProduct[];
  };
} => ({
  type: ActionTypes.GET_PRODUCTS,
  payload: {
    products,
  },
});

export const addProductToCart = (
  id: number
): {
  type: ActionTypes.ADD_PRODUCT_TO_CART;
  payload: {
    id: number;
  };
} => ({
  type: ActionTypes.ADD_PRODUCT_TO_CART,
  payload: {
    id,
  },
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
  | ReturnType<typeof addProductToCart>
  | ReturnType<typeof deleteProductFromCart>;
