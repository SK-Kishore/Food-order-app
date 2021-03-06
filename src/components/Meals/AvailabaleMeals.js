import React from "react";
import { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealsItem from "./MealsItem/MealsItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailabaleMeals() {
  const mealsItem = DUMMY_MEALS.map((meals) => (
    <MealsItem
      name={meals.name}
      price={meals.price}
      description={meals.description}
    />
  ));
  return (
    <Fragment>
      <Card>
        <section className={classes.meals}>
          <ul>{mealsItem}</ul>
        </section>
      </Card>
    </Fragment>
  );
}

export default AvailabaleMeals;
