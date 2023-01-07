import { useReducer, createContext } from "react";
import axios from "axios";
import ProductReducer from "./ProductReducer";
import { ActionTypes } from "./ProductActions";
import { IProduct } from "../../interfaces/IProduct";

interface IProductContext {
  products: IProduct[];
  cart: {[key: number]: {product: IProduct, quantity: number, totalPrice: number}} | null;
  showCart: boolean;
  toggleCart?: (showCart: boolean) => void;
  changeCartProductQuantity?: (id: number, quantity: number) => void
  getProducts?: () => Promise<void>;
  addProductToCart?: (id: number, quantity: number) => void;
  deleteProductFromCart?: (id: number) => void;
}

const initialState: IProductContext = {
  products: [],
  cart: null,
  showCart: false
};

export type Store = typeof initialState;

export const ProductContext = createContext<IProductContext | null>(initialState);

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

  const toggleCart = (showCart: boolean) => {
    dispatch({
      type: ActionTypes.SHOW_CART,
      payload: showCart
    });
  }

  const changeCartProductQuantity = (id: number, quantity: number) => {
    dispatch({
      type: ActionTypes.CHANGE_CART_PRODUCT_QUANTITY,
      payload: {id, quantity}
    });
  }

  const addProductToCart = (id: number, quantity: number) => {        
    dispatch({
      type: ActionTypes.ADD_PRODUCT_TO_CART,
      payload:  {id: id, quantity},
    });
  };

  const deleteProductFromCart = (id: number) => {
    dispatch({
      type: ActionTypes.DELETE_PRODUCT_FROM_CART,
      payload: id,
    });
  };

  return <ProductContext.Provider
    value={{
      products: state.products,
      cart: state.cart,
      showCart: state.showCart,
      toggleCart,
      changeCartProductQuantity,
      getProducts,
      addProductToCart,
      deleteProductFromCart
    }}
  >
    {children}
  </ProductContext.Provider>;
};
