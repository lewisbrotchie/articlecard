import React, { Component } from "react";
import styled from "styled-components";

const CommentIcon = styled.h5`
  margin: 10px;
`;

class Comment extends Component {
  render() {
    return <CommentIcon>Comment</CommentIcon>;
  }
}

export default Comment;
