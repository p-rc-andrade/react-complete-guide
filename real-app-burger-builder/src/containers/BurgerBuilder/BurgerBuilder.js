import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

class BuilderBurger extends Component {
  render() {
    return (
      <>
        <Burger />
        <div>Build Controls</div>
      </>
    );
  }
}

export default BuilderBurger;
