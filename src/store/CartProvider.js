import React, { useReducer } from "react";
//We are Manging all components state and other stuffs managed by in this components
import CartContext from "./cart-context";
const initialValue = {
  items: [],
  totalAmount: 0,
};

const reducer = function (preState, action) {
  const updatedItems = preState.items.concat(action.items);
  const updatedAmount =
    preState.totalAmount + action.items.amount * action.items.price;
  console.log(updatedAmount);
  return {
    items: updatedItems,
    totalAmount: updatedAmount,
  };
};

const CartProvider = function (props) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const addItem = function (item) {
    dispatch({ action: "ADD", items: item });
  };
  const removeItem = function (id) {
    dispatch({ action: "ID", id: id });
  };

  const contextValue = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
