import React from "react";
import { Fragment } from "react";
import AvailabaleMeals from "./AvailabaleMeals";
import MealsSummary from "./MealsSummary";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailabaleMeals />
    </Fragment>
  );
}

export default Meals;
