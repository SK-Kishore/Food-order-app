import React, { Fragment, useState } from "react";
import CartItems from "./components/Cart/CartItems";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
const App = function () {
  const [cartDisplay, setCartDispaly] = useState(false);

  const cartDisplayHandler = function () {
    setCartDispaly(true);
  };
  const cartHideHandler = function () {
    setCartDispaly(false);
  };

  return (
    <CartProvider>
      {cartDisplay && <CartItems close={cartHideHandler} />}
      <Header openCart={cartDisplayHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
export default App;
