import React, { Component } from "react";
import Profile from "./Profile";
import Like from "./Like";
import Comment from "./Comment";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-top: auto;
`;
const ContentDescription = styled.p`
  margin: 7px;
`;
const ContentHeader = styled.h3`
  margin: 7px;
`;

class Content extends Component {
  render() {
    return (
      <div>
        <ContentHeader>Lorem Ipsum</ContentHeader>
        <ContentDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntco laboris nisi ut aliquip ex ea commodo
          consequat.
        </ContentDescription>
        <Wrapper>
          <Profile />
          <SocialWrapper>
            <Like />
            <Comment />
          </SocialWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default Content;
