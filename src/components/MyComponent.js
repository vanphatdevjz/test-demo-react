// class component
// function component
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Hary Magai",
    address: "Nam Dinh",
    age: 26,
  };
  render() {
    return (
      <div>
        My Name is {this.state.name} and i am from {this.state.address}
      </div>
    );
  }
}
export default MyComponent;
