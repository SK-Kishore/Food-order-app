import React, { useRef } from "react";
import classes from "./MealsForm.module.css";
import Input from "../../UI/Input";
function MealsForm(props) {
  const userEnterAmount = useRef();
  const onSubmissionHandler = function (e) {
    e.preventDefault();
    const userEnteredAmount = userEnterAmount.current.value;
    const numberOfEnteredAmount = +userEnteredAmount;
    props.addToCart(numberOfEnteredAmount);
  };

  return (
    <form onSubmit={onSubmissionHandler} className={classes.form}>
      <Input
        ref={userEnterAmount}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealsForm;
