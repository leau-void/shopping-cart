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
  const [searchInput, setSearchInput] = useState({
    attribute: "",
    term: "",
  });

  const updateProducts = (e) => setProducts(e.detail);

  const searchFormHandlers = {
    fetchInput: (e) =>
      setSearchInput({
        attribute: searchInput.attribute,
        term: e.target.value,
      }),
    fetchAttrChange: (e) =>
      setSearchInput({
        attribute: e.target.value,
        term: searchInput.term,
      }),
    searchNewProducts: (e) => {
      e.preventDefault();
      setSearch(searchInput);
    },
  };

  useEffect(() => {
    const { attribute = "albumTerm", term = "hymn" } = search;

    console.log(attribute);
    fetchData(
      `https://itunes.apple.com/search?media=music&entity=album&term=${term}&attribute=${attribute}&limit=50&callback=emitData`
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
        </Route>
        <Route path="/shop">
          <Shop
            {...{ products, searchFormHandlers, input: searchInput.term }}
          />
        </Route>
      </Switch>
      <Cart />
      <Footer />
    </>
  );
};

export default App;
