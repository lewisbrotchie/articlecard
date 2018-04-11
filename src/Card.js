import React, { Component } from "react";
import ContextPicture from "./ContextPicture";
import Content from "./Content";

class Card extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Card</p>
          <ContextPicture />
        </div>
        <div>
          <Content />
        </div>
      </div>
    );
  }
}

export default Card;
