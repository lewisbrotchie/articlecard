import React, { Component } from "react";
import styled from "styled-components";

const Pic = styled.img`
  border-radius: 50%;
  margin: 10px;
`;

class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json")
      .then(response => response.json())
      .then(data => {
        const img = data.results[0].picture.thumbnail;
        this.setState({ img });
      })
      .catch(e => console.log(e));
  }

  render() {
    return <Pic src={this.state.img} height="50" alt="Profile" />;
  }
}

export default ProfilePic;
