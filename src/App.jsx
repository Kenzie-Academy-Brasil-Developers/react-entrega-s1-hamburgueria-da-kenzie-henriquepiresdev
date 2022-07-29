import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import GlobalStyle from "./styles/Global";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [liCart, setLiCart] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((Response) => Response.json())
      .then((response) => {
        setListProducts(response);
        setFiltredProducts(response);
        return response;
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <Header
        filtredProducts={filtredProducts}
        setFiltredProducts={setFiltredProducts}
        listProducts={listProducts}
      />
      <main>
        <ProductList
          filtredProducts={filtredProducts}
          liCart={liCart}
          listProducts={listProducts}
          setLiCart={setLiCart}
        />
        <Cart liCart={liCart} setLiCart={setLiCart} />
      </main>
    </div>
  );
}

export default App;
