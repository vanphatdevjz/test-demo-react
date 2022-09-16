import React from "react";

class UserInfor extends React.Component {
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
        My Name is {this.state.name} and i am from {this.state.address}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
