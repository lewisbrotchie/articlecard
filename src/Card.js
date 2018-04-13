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
  border-radius: 4px;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.15), 0 8px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  transition-duration: 0.3s;
  transition-property: transform;
  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: "";
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 80%
    );
    transition-duration: 0.3s;
    transition-property: transform, opacity;
  }
  &:hover {
    transform: translateY(-5px);
  }
  &:hover:before {
    opacity: 1;
    transform: translateY(5px);
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
