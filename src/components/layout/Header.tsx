import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";

const Container = styled.header`
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
  return <Container>
    <h1>Fakestore</h1>    
    <button>
      <MdShoppingCart className="icon"/>
    </button>
  </Container>
}
