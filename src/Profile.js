import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import styled from "styled-components";
import Username from "./Username";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

//TODO: User randomuser.me api to generate random profile (props - state?)

class Profile extends Component {
  render() {
    return (
      <Wrapper>
        <ProfilePic />
        <Username />
      </Wrapper>
    );
  }
}

export default Profile;
