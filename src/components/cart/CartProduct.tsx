import { useContext } from "react";
import styled from "styled-components"
import { ProductContext } from "../../context/products/ProductState";
import { IProduct } from "../../interfaces/IProduct"
import { TiDelete } from "react-icons/ti";

const Container = styled.div`
  width: 100%;
  min-height: min-content;

  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff5bb;
  padding: 10px;

  display: flex;  
  gap: 15px;
  align-items: center;

  .cart-item__title{
    width: 180px;
    font-size: 14px;
  }

  .quantity{
    font-size: 12px;
    width: 40px;

    input{
      width: 100%;
    }
  }


  .price{
    font-size: 14px;
  }

  .delete{
    align-self: center;
    color: #c90000;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`

export const CartProduct = ({cartItem} :{cartItem: {product: IProduct, quantity: number, totalPrice: number}}) => {
  const { changeCartProductQuantity, deleteProductFromCart } = useContext(ProductContext)!;
  const { product, quantity, totalPrice } = cartItem;  

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeCartProductQuantity!(product.id, parseInt(e.target.value));
  }

  return (
    <Container>
      <h1 className="cart-item__title">{product.title}</h1>
      <div className="quantity">
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" name="quantity" min="1" placeholder="1" value={quantity} onChange={(e) => handleQuantity(e)}/>
      </div> 
      <h2 className="price">${ quantity * product.price}</h2>
      
      <TiDelete className="delete" onClick={() => deleteProductFromCart!(product.id)}/>
    </Container>
  )
}
