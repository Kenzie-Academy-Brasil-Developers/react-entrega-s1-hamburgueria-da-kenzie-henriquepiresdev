import { ContainerHeader, Container, DivLogo, DivForm } from "./styles";
function Header() {
  return (
    <ContainerHeader>
      <Container>
        <DivLogo>
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
        </DivLogo>
        <DivForm>
          <form>
            <input type="text" placeholder="Digitar a Pesquisa" />
            <button>Pesquisar</button>
          </form>
        </DivForm>
      </Container>
    </ContainerHeader>
  );
}
export default Header;
