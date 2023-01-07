import { useContext, useState } from "react";
import styled from "styled-components";
import { IProduct } from "../../interfaces/IProduct";
import { FaCartPlus } from "react-icons/fa";
import { ProductContext } from "../../context/products/ProductState";

const Container = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 300px;
  height: 350px;

  border: 1px solid #eee;
  background-color: #fff;  
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  border-radius: 8px;
  text-align: center;

  img{
    width: 100%;
    max-height: 180px;

    object-fit: contain;
  }

  .info{
    padding: 20px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1{
      font-size: 14px;
      color: #0068d0; 
    }

    h2{
      color: #536475;
    }
  }
  
  .buying{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    .quantity{
      font-size: 12px;
      width: 40px;
      height: 50px;
      
      display: flex;
      justify-items:center ;
      align-items: center;      
      flex-direction: column;
      gap: 5px;
      
      input{
        width: 100%;
        height: 100%;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      input:active, input:focus{
        outline: none;
      }
    }

    button{
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      background-color: #85bc17;      

      display: flex;
      align-items: center;
      justify-content: center;

      .icon{
        color: #fff;
        width: 70%;
        height: 70%;
        margin: auto 0;
      }

      &:hover{
        background-color: #6ca004;      
      }
    }
  }
`;

type ProductProps = {
  product: IProduct
}

export const Product = ({product}: ProductProps)  => {

  const { id, image, title, description, price, category,  } = product;
  const { addProductToCart } = useContext(ProductContext)!;
  const [quantity, setQuantity] = useState(1);  

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  }

  return (
    <Container>
      <img src={image} alt={title} />
      <div className="info">
        <h1>{title}</h1>        
        <h2>${price}</h2>

        <div className="buying">
          <div className="quantity">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="1" placeholder="1" value={quantity} onChange={(e) => handleQuantity(e)}/>
          </div>

          <button onClick={() => addProductToCart?.(id, quantity)}>
            <FaCartPlus className="icon" />
          </button>
        </div>
      </div>
    </Container>
  )
}
