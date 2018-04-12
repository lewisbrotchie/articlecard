import React, { Component } from "react";
import styled from "styled-components";

const LikeIcon = styled.h5`
  margin: 10px;
`;

class Like extends Component {
  render() {
    return <LikeIcon>Like</LikeIcon>;
  }
}

export default Like;
