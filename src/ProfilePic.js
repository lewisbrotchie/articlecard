import React, { Component } from "react";

class ProfilePic extends Component {
  render() {
    const imgLink =
      "https://s3.eu-central-1.amazonaws.com/artistarea.gallereplay.com/production/user_9/picture_2405201614728.jpg";
    return <img src={imgLink} height="50" />;
  }
}

export default ProfilePic;
