import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
