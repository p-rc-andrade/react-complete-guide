import React, { Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[OrderSummary] Will Update");
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (ingKey) => {
        return (
          <li key={ingKey}>
            <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:{" "}
            {this.props.ingredients[ingKey]}
          </li>
        );
      }
    );

    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price:</strong> {this.props.price.toFixed(2)}
        </p>
        <p>Continue to Checkout ?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelHandler}>
          CANCEL
        </Button>
        <Button
          btnType="Success"
          clicked={() => this.props.purchaseContinueHandler()}
        >
          CONTINUE
        </Button>
      </>
    );
  }
}

export default OrderSummary;
