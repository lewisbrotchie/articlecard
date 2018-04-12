import React, { Component } from "react";
import Card from "./Card";

const divStyle = {
  display: "flex",
  flexWrap: "wrap"
};

class App extends Component {
  render() {
    return (
      <div style={divStyle}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
