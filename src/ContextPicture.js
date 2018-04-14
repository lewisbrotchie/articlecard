import React, { Component } from "react";
import styled from "styled-components";

const Picture = styled.img`
  border-radius: 4px 4px 0 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 100%;
`;

class ContextPicture extends Component {
  render() {
    return (
      <Picture
        src={
          "https://unsplash.it/500/200?random=" +
          Math.floor(Math.random() * 500)
        }
        height="200"
        alt="random"
      />
    );
  }
}

export default ContextPicture;
