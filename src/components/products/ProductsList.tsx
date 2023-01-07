import { useContext, useEffect } from "react"
import styled from "styled-components";
import { ProductContext } from "../../context/products/ProductState"
import { Cart } from "../cart/Cart";
import { Product } from "./Product";

const Container = styled.div`
  position: relative;

  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const ProductsList = () => {
  const { products, getProducts } = useContext(ProductContext)!;

  useEffect(() => {
    (async () => {
      await getProducts?.();      
    })()
  }, []);

  return (
    <Container>
      { products && products.map((product) => <Product key={product.id} product={product} /> )}
      <Cart />
    </Container>
  )
}
