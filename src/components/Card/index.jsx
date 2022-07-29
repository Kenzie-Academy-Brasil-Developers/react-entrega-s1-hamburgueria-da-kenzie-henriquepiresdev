import { useState } from "react";
import { MainCard } from "./styles";

function Card({ product, setLiCart, liCart }) {
  const [idProduct, setIdProduct] = useState(9999999);
  function validation() {
    const finded = liCart.find((e) => e.id === idProduct);
    if (!finded) {
      setLiCart([product, ...liCart]);
    }
  }
  return (
    <MainCard>
      <figure>
        <img src={product.img} alt="" />
      </figure>
      <div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span>R$ {product.price.toFixed(2)}</span>
        <button
          onClick={() => {
            validation();
            setIdProduct(product.id);
          }}
          id={product.id}
        >
          Adicionar
        </button>
      </div>
    </MainCard>
  );
}
export default Card;
