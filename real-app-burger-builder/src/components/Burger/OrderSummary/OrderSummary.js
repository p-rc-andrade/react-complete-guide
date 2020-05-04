import React from "react";
import Button from "../../UI/Button/Button";
const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:{" "}
        {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price:</strong> {props.price.toFixed(2)}
      </p>
      <p>Continue to Checkout ?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelHandler}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={() => props.purchaseContinueHandler()}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
