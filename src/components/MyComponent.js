// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  state = {
    name: "Hary Magai",
    address: "Nam Dinh",
    age: 26,
  };

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleOnChangeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <UserInfor></UserInfor>
      </div>
    );
  }
}
export default MyComponent;
