import { Switch, Route } from "react-router";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Header navbar={<Navbar />} />

      <Switch>
        <Route path="/" exact>
          <Home />
          {products.map((prod) => (
            <div>{prod.title}</div>
          ))}
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
      <Cart test="1" />
      <Footer />
    </>
  );
};

export default App;
