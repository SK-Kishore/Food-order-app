import React from "react";
import classes from "./CartItem.module.css";
function CartItems() {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "kishore", amount: 2, price: 12.99 }].map((items) => {
        return <li>{items.name}</li>;
      })}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}

export default CartItems;
