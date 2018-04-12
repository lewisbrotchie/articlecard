import React, { Component } from "react";
import styled from "styled-components";
import Upvote from "./Upvote.png";

const LikeIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
  margin-right: auto;
`;

class Like extends Component {
  render() {
    return <LikeIcon src={Upvote} />;
  }
}

export default Like;
