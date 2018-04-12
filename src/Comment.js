import React, { Component } from "react";
import styled from "styled-components";
import CommentIconPic from "./CommentIcon.png";

const CommentIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
  margin-top: auto;
  opacity: 0.4;
`;

class Comment extends Component {
  render() {
    return <CommentIcon src={CommentIconPic} />;
  }
}

export default Comment;
