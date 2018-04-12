import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.h5`
  margin: 10px;
`;

//TODO: User randomuser.me api to generate random profile (props - state?)

class Profile extends Component {
  render() {
    return (
      <Wrapper>
        <ProfilePic />
        <TextWrapper>
          <Text>Ipsum Lorem</Text>
          <Text>Reading Time</Text>
        </TextWrapper>
      </Wrapper>
    );
  }
}

export default Profile;
