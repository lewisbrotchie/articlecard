import React, { Component } from "react";
import styled from "styled-components";

const Picture = styled.img`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 100%;
`;

class ContextPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
  }

  render() {
    return (
      <Picture
        src={
          "http://unsplash.it/500/200?random=" + Math.floor(Math.random() * 500)
        }
        height="200"
        alt="random"
      />
    );
  }
}

export default ContextPicture;
