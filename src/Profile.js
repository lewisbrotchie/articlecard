import React, { Component } from "react";
import ProfilePic from "./ProfilePic";
import styled from "styled-components";
import Username from "./Username";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReadingTime = styled.h6`
  margin: 10px;
`;

//TODO: User randomuser.me api to generate random profile (props - state?)

class Profile extends Component {
  render() {
    return (
      <Wrapper>
        <ProfilePic />
        <TextWrapper>
          <Username />
          <ReadingTime>Reading Time</ReadingTime>
        </TextWrapper>
      </Wrapper>
    );
  }
}

export default Profile;
