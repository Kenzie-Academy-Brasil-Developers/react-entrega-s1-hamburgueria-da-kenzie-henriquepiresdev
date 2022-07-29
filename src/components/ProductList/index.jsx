import Card from "../Card";
import { DivContainer } from "./styles";

function ProductList({ listProducts, setLiCart, liCart, filtredProducts }) {
  return (
    <DivContainer>
      <ul>
        {filtredProducts.map((product) => (
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
