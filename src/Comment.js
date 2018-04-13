import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import CommentIconPic from "./CommentIcon.png";

function iconPulse(scale) {
  const animation = keyframes`
    25% {
      transform: scale(scale);
    }
    75% {
      transform: scale(0.9);
    }
  `;
  return animation;
}

const CommentIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
  margin-top: auto;
  opacity: 0.4;
  &:hover {
    animation-name: ${iconPulse(1.1)};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

class Comment extends Component {
  render() {
    return <CommentIcon src={CommentIconPic} />;
  }
}

export default Comment;
