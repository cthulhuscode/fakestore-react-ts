import { useReducer, createContext } from "react";
import axios from "axios";
import ProductReducer from "./ProductReducer";
import { ActionTypes } from "./ProductActions";
import { IProduct } from "../../interfaces/IProduct";

interface IProductContext {
  products: IProduct[];
  cart: IProduct[];
  getProducts?: () => Promise<void>;
  addProductToCart?: (id: number) => void;
  deleteProductFromCart?: (id: number) => void;
}

const initialState: IProductContext = {
  products: [],
  cart: [],
};

export type Store = typeof initialState;

const ProductContext = createContext<IProductContext | null>(initialState);

export const ProductProvider = ({children}:any) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");

      dispatch({
        type: ActionTypes.GET_PRODUCTS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addProductToCart = (id: number) => {
    dispatch({
      type: ActionTypes.ADD_PRODUCT_TO_CART,
      payload: { id },
    });
  };

  const deleteProductFromCart = (id: number) => {
    dispatch({
      type: ActionTypes.DELETE_PRODUCT_FROM_CART,
      payload: { id },
    });
  };

  return <ProductContext.Provider
    value={{
      products: state.products,
      cart: state.cart,
      getProducts,
      addProductToCart,
      deleteProductFromCart
    }}
  >
    {children}
  </ProductContext.Provider>;
};
