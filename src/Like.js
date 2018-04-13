import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Upvote from "./Upvote.png";

function iconUp(pix) {
  const animation = keyframes`
    0% {
      transform: translateY(${pix}px)
    }
    50% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(${pix}px);
    }
  `;
  return animation;
}
function iconUpFloat(pix) {
  const animation = keyframes`
    100% {
      transform: translateY(${pix}px);
    }
  `;
  return animation;
}

const LikeIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
  margin-right: auto;
  transition: background 0.5s ease-in;
  &:hover {
    animation-name: ${iconUpFloat(-6)}, ${iconUp(-6)};
    animation-duration: 0.3s, 1.5s;
    animation-delay: 0s, 0.3s;
    animation-timing-function: ease-out, ease-in-out;
    animation-iteration-count: 1, infinite;
    animation-fill-mode: forwards;
    animation-direction: normal, alternate;
  }
`;

class Like extends Component {
  render() {
    return <LikeIcon src={Upvote} />;
  }
}

export default Like;
