import React, { Component } from "react";
import styled from "styled-components";

const Pic = styled.img`
  border-radius: 50%;
  margin: 10px;
`;

class ProfilePic extends Component {
  render() {
    const imgLink =
      "https://s3.eu-central-1.amazonaws.com/artistarea.gallereplay.com/production/user_9/picture_2405201614728.jpg";
    return <Pic src={imgLink} height="50" alt="Profile" />;
  }
}

export default ProfilePic;
