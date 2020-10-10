import React from "react";
import { connect } from "react-redux";

class LoginPage extends React.Component {
  state = {
    user: "",
    password: "",
    error: "",
  };

  onUserNameChange = (e) => {
    const user = e.target.value;
    this.setState(() => ({
      user,
    }));
  };

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({
      password,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const match = this.props.login_creds.find(
      (login_cred) => login_cred.user === this.state.user
    );
    if (!match || match.password !== this.state.password) {
      this.setState(() => ({
        error: "Wrong Credentials!",
      }));
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <label>User name: </label>
          <input
            id="user"
            type="text"
            autoFocus
            placeholder="Your user name"
            onChange={this.onUserNameChange}
          />
          <br></br>
          <label>Password: </label>
          <input
            id="password"
            type="password"
            onChange={this.onPasswordChange}
          />
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login_creds: state.login,
});

export default connect(mapStateToProps)(LoginPage);
