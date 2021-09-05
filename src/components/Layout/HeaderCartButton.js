import React, { useContext } from "react";
import CartIcon from "../Cart/Cart";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
function HeaderCartButton(props) {
  const ctxValue = useContext(CartContext);

  const userAddedItem = ctxValue.items.reduce((accu, curr) => {
    return accu + curr.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{userAddedItem}</span>
    </button>
  );
}

export default HeaderCartButton;
