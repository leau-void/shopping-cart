import { Switch, Route, useLocation } from "react-router";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { React, useEffect, useState } from "react";
import fetchData from "./scripts/fetchData";
import emitData from "./scripts/emitData";
import { AnimatePresence } from "framer-motion";
import CartContext, { CartProvider } from "./context/CartContext";

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

  const addToCartHandler = ({ index }) => {
    if (cart.includes(products[index])) return;
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
      `https://itunes.apple.com/search?media=music&entity=album&term=${term}&attribute=${attribute}&limit=50&callback=emitData`
    );

    window.addEventListener("newData", updateProducts);

    return () => window.removeEventListener("newData", updateProducts);
  }, [search]);

  // key={location.pathname} location={location}
  return (
    <CartProvider value={cart}>
      <Header itemQuantity={cart.length} {...{ toggleCart }} />
      <AnimatePresence>
        {isCartOpen && (
          <Cart {...{ cart, toggleCart, removeFromCartHandler }} />
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop">
            <Shop
              {...{
                products,
                addToCartHandler,
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
