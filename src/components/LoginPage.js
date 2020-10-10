import React from "react";

class LoginPage extends React.Component {
  state = {
    user: "",
    password: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.onSubmit}>
          <label>User name: </label>
          <input id="user" type="text" autoFocus placeholder="Your user name" />
          <br></br>
          <label>Password: </label>
          <input id="password" type="password" />
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
