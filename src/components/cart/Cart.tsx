import { useContext } from "react";
import styled from "styled-components"
import { ProductContext } from "../../context/products/ProductState";
import { CartProduct } from "./CartProduct";

const CartElement = styled.div`
  position: fixed;
  right: 0;
  top: 60px;

  width: 350px;
  height: 500px;
  background-color: #f9f9f9;  
  border: 2px solid #ccc;
  border-top: none;
  border-radius: 0 0 8px 8px;
  
  .cart-container{
    width: 100%;
    height: 100%;
    
    padding: 10px;
    overflow-y: scroll;    

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;  
  }

  .cart-title{
    text-align: center;
    font-size: 24px;
    color: goldenrod;
    margin-bottom: 10px;
  }

  .cart-price{
    width: 95%;
    height: 30px;    

    position: absolute;
    bottom: 0;
    
    border-radius: 0 0 0 8px;        
    background-color: goldenrod;
    padding-right: 10px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Cart = () => {
  const { cart, showCart } = useContext(ProductContext)!;  

  const totalPrice = 
    cart && 
    Object
      .entries(cart)
      .reduce((acc, val) => acc + val[1].totalPrice, 0);

  return <>  
    <CartElement style={{display: `${showCart ? "unset" : "none"}`}}>   
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        { cart && Object.entries(cart).map((product) => <CartProduct key={product[1].product.id} cartItem={product[1]} />) }
        <h4 className="cart-price">Precio total: ${totalPrice}</h4>        
      </div> 
    </CartElement>  
  </>
}