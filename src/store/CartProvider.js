import React from "react";
//We are Manging all components state and other stuffs managed by in this components
import CartContext from "./cart-context";

const CartProvider = function () {
  const addItem = function () {};
  const removeItem = function () {};

  const contextValue = {
    items: [],
    totalAmount: 0,
    addItem: addItem,
    removeItem: removeItem,
  };

  <CartContext.Provider value={contextValue}>
    {props.children}
  </CartContext.Provider>;
};
export default CartProvider;
