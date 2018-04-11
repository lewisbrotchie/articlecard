import React, { Component } from "react";

class ContextPicture extends Component {
  render() {
    const imgLink =
      "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg";

    return <img src={imgLink} height="150" alt="React Logo" />;
  }
}

export default ContextPicture;
