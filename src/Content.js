import React, { Component } from "react";
import Profile from "./Profile";
import Like from "./Like";
import Comment from "./Comment";

class Content extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Lorem Ipsum</h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div>
          <Profile />
        </div>
        <div>
          <Like />
        </div>
        <div>
          <Comment />
        </div>
      </div>
    );
  }
}

export default Content;
