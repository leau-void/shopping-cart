import { Switch, Route, useLocation } from "react-router";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import React, { useEffect, useState } from "react";
import fetchData from "./utils/fetchData";
import emitData from "./utils/emitData";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./context/CartContext";

window.emitData = emitData;

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
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

  const checkIfInCart = ({ index }) => cart.includes(products[index]);

  const addToCartHandler = ({ index }) => {
    if (checkIfInCart({ index })) return;
    setCart([...cart, products[index]]);
  };

  const removeFromCartHandler = ({ index }) => {
    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const location = useLocation();

  useEffect(() => {
    const { attribute = "albumTerm", term = "hymn" } = search;

    fetchData(
      `https://itunes.apple.com/search?media=music&entity=album&limit=45&term=${term}&attribute=${attribute}&callback=emitData`
    );

    window.addEventListener("newData", updateProducts);

    return () => window.removeEventListener("newData", updateProducts);
  }, [search]);

  return (
    <CartProvider
      value={{
        cart,
        toggleCart,
        checkIfInCart,
        addToCartHandler,
        removeFromCartHandler,
      }}>
      <Header />
      <Cart {...{ doOpen: isCartOpen }} />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop">
            <Shop
              {...{
                products,
                searchFormHandlers,
                input: searchInput.term,
              }}
            />
          </Route>
        </Switch>
      </AnimatePresence>

      <Footer />
    </CartProvider>
  );
};

export default App;
