import CartProduct from "../CartProduct";
import {
  DivCards,
  DivContainer,
  EmptyCart,
  LiCard,
  LiGreen,
  LiTotal,
} from "./styles";

function Cart() {
  return (
    <DivContainer>
      <ul>
        <LiGreen>Carrinho de compras</LiGreen>

        {/* <EmptyCart>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </EmptyCart> */}

        <DivCards>
          <LiCard>
            <CartProduct />
          </LiCard>
          <LiCard>
            <CartProduct />
          </LiCard>
          <LiCard>
            <CartProduct />
          </LiCard>
        </DivCards>
        <LiTotal>
          <div>
            Total <span>R$ 40.00</span>
          </div>
          <button>Remover Todos</button>
        </LiTotal>
      </ul>
    </DivContainer>
  );
}
export default Cart;
