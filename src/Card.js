import React, { Component } from "react";
import ContextPicture from "./ContextPicture";
import Content from "./Content";

class Card extends Component {
  render() {
    return (
      <div>
        <p>Card</p>
        <ContextPicture />
        <Content />
      </div>
    );
  }
}

export default Card;
