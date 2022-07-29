import { DivCart } from "./style";

function CartProduct({ product, setLiCart, liCart }) {
  return (
    <DivCart>
      <figure>
        <img src={product.img} alt="Imagem do produto" />
      </figure>
      <div>
        <h4>{product.name}</h4>
        <p>{product.category}</p>
        <button
          onClick={() => {
            const removed = liCart.filter((e) => e.id !== product.id);
            setLiCart(removed);
          }}
        >
          Remover
        </button>
      </div>
    </DivCart>
  );
}
export default CartProduct;
