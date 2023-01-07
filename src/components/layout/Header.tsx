import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { ProductContext } from "../../context/products/ProductState";
import { useContext } from "react";

const Container = styled.header`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  padding: 0 15px;

  color: #fff;
  background-color: black;

  height: 60px;

  display: flex;
  justify-content:space-between;
  align-items: center;

  button{
    width: 40px;
    height: 40px;
    background-color: #daa520;	
    cursor: pointer;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      background-color: #c08a01;	
    }

    .icon{
      color: #ffF;
      width: 60%;
      height: 60%;
    }
  }
`;

export const Header = () => {
  const { showCart, toggleCart } = useContext(ProductContext)!;  

  return <Container>
    <h1>Fakestore</h1>    
    <button onClick={() => toggleCart!(!showCart)}>
      <MdShoppingCart className="icon"/>
    </button>
  </Container>
}
