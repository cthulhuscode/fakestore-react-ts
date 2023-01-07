import { useContext, useEffect } from "react"
import styled from "styled-components";
import { ProductContext } from "../../context/products/ProductState"
import { Product } from "./Product";

const Container = styled.div`
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
    </Container>
  )
}
