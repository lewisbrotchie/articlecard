import React, { Component } from "react";
import ProfilePic from "./ProfilePic";

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfilePic />
        <h5>Ipsum Lorem</h5>
        <h6>Reading Time</h6>
      </div>
    );
  }
}

export default Profile;
