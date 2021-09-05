import React, { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealsForm from "./MealsForm";
import CartContext from "../../../store/cart-context";
function MealsItem(props) {
  const ctx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  //passing the data via contex;
  const addToCart = function (userEnterAmount) {
    ctx.addItem({
      id: props.id,
      price: props.price,
      amount: userEnterAmount,
      name: props.name,
    });
  };
  console.log("MealsItem");
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealsForm addToCart={addToCart} />
    </li>
  );
}

export default MealsItem;
