import React, { Component } from "react";
import ContextPicture from "./ContextPicture";
import Content from "./Content";
import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    background: #e2e1e0;
  }
`;

const CardStyle = styled.div`
  font-family: "Helvetica";
  width: 500px;
  margin: 30px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.45), 0 14px 14px rgba(0, 0, 0, 0.28);
  }
`;

class Card extends Component {
  render() {
    return (
      <CardStyle>
        <ContextPicture />
        <Content />
      </CardStyle>
    );
  }
}

export default Card;
