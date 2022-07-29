import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import GlobalStyle from "./styles/Global";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [liCart, setLiCart] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((Response) => Response.json())
      .then((response) => setListProducts(response))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <ProductList
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
