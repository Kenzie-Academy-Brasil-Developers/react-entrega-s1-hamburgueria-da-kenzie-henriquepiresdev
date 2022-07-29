import Card from "../Card";
import { DivContainer } from "./styles";

function ProductList({ listProducts, setLiCart, liCart }) {
  return (
    <DivContainer>
      <ul>
        {listProducts.map((product) => (
          <Card
            liCart={liCart}
            listProducts={listProducts}
            product={product}
            key={product.id}
            setLiCart={setLiCart}
          />
        ))}
      </ul>
    </DivContainer>
  );
}
export default ProductList;
