import { ContainerHeader, Container, DivLogo, DivForm } from "./styles";
function Header({ listProducts, filtredProducts, setFiltredProducts }) {
  function showItens(input) {
    const productFiltered = listProducts.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );
    setFiltredProducts(productFiltered);
  }
  return (
    <ContainerHeader>
      <Container>
        <DivLogo>
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
        </DivLogo>
        <DivForm>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              onChange={(e) => showItens(e.target.value)}
              type="text"
              placeholder="Digitar a Pesquisa"
            />
            <button>Pesquisar</button>
          </form>
        </DivForm>
      </Container>
    </ContainerHeader>
  );
}
export default Header;
