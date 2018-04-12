import React from "react";
import styled from "styled-components";

const UsernameStyle = styled.h5`
  margin: 10px;
  margin-top: 15px;
`;

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json")
      .then(response => response.json())
      .then(data => {
        const firstName = data.results[0].name.first,
          lastName = data.results[0].name.last;
        this.setState({ firstName, lastName });
      })
      .catch(e => console.log(e));
  }
  upperCaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    return (
      <UsernameStyle>
        {this.upperCaseFirstLetter(this.state.firstName) +
          " " +
          this.upperCaseFirstLetter(this.state.lastName)}
      </UsernameStyle>
    );
  }
}

export default Username;
