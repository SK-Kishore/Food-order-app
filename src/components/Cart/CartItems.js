import React from "react";
import Modal from "../UI/Modal";
import classes from "./CartItem.module.css";

function CartItems() {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "kishore", amount: 2, price: 12.99 }].map((items) => {
        return <li>{items.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default CartItems;
