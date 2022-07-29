import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
