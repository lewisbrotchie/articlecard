import React, { Component } from "react";
import styled from "styled-components";

const Picture = styled.img`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 100%;
`;

class ContextPicture extends Component {
  render() {
    const imgLink = "https://unsplash.it/500/200?random=592";

    return <Picture src={imgLink} height="200" alt="random" />;
  }
}

export default ContextPicture;
