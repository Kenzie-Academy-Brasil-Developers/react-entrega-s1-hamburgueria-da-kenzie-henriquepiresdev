import CartProduct from "../CartProduct";
import {
  DivCards,
  DivContainer,
  EmptyCart,
  LiCard,
  LiGreen,
  LiTotal,
} from "./styles";

function Cart({ liCart, setLiCart }) {
  return (
    <DivContainer>
      <ul>
        <LiGreen>Carrinho de compras</LiGreen>
        {liCart.length > 0 ? (
          <>
            <DivCards>
              {liCart.map((product) => {
                return (
                  <LiCard key={product.id}>
                    <CartProduct
                      product={product}
                      setLiCart={setLiCart}
                      liCart={liCart}
                    />
                  </LiCard>
                );
              })}
            </DivCards>
            <LiTotal>
              <div>
                Total{" "}
                <span>
                  R$ {liCart.reduce((a, b) => a + b.price, 0).toFixed(2)}
                </span>
              </div>
              <button onClick={() => setLiCart([])}>Remover Todos</button>
            </LiTotal>
          </>
        ) : (
          <EmptyCart>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </EmptyCart>
        )}
      </ul>
    </DivContainer>
  );
}
export default Cart;
