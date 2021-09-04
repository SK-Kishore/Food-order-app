import React, { Fragment } from "react";
import CartItems from "./components/Cart/CartItems";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
const App = function () {
  return (
    <Fragment>
      <CartItems />
      <Header />

      <main>
        <Meals />
      </main>
    </Fragment>
  );
};
export default App;
