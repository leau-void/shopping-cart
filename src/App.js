import { Switch, Route } from "react-router";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { Bag, BagCheck, BagDash, BagPlus, BagX } from "@styled-icons/bootstrap";
import fetchData from "./scripts/fetchData";
import emitData from "./scripts/emitData";

window.emitData = emitData;

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState({});

  const updateProducts = (e) => setProducts(e.detail);

  useEffect(() => {
    const { attribute = "albumTerm", term = "hymn" } = search;

    fetchData(
      `https://itunes.apple.com/search?media=music&entity=album&limit=25&term=${term}&attribute=${attribute}&callback=emitData`
    );

    window.addEventListener("newData", updateProducts);

    return () => window.removeEventListener("newData", updateProducts);
  }, [search]);

  return (
    <>
      <Header itemQuantity={cart.length} />

      <Switch>
        <Route path="/" exact>
          <Home />
          {/* products.map((prod) => (
            <div>{prod.title}</div>
          )) */}
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
      <Cart />
      <Footer />
    </>
  );
};

export default App;
