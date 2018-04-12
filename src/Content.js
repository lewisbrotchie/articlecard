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
class Content extends Component {
  render() {
    return (
      <div>
        <h3>Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
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
