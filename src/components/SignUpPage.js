import React from "react";
import { connect } from "react-redux";

import { addUser } from "../actions/signup";

class SignUpPage extends React.Component {
  state = {
    email: "",
    user: "",
    password: "",
    confirm_password: "",
    error: "",
  };

  emailOnChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({
      email,
    }));
  };

  userOnChange = (e) => {
    const user = e.target.value;
    this.setState(() => ({
      user,
    }));
  };

  passwordOnChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({
      password,
    }));
  };

  confirmPasswordOnChange = (e) => {
    const confirm_password = e.target.value;
    this.setState(() => ({
      confirm_password,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const password = this.state.password;
    const confirm_password = this.state.confirm_password;
    const isUniqueEmail = this.props.users.every(
      (user) => user.email !== this.state.email
    );
    const isUniqueUserName = this.props.users.every(
      (user) => user.user !== this.state.user
    );
    if (password !== confirm_password) {
      this.setState(() => ({
        error: "Password and confirm password donot match!",
      }));
    } else if (!isUniqueEmail) {
      this.setState(() => ({
        error: "Email is already used! Login.",
      }));
    } else if (!isUniqueUserName) {
      this.setState(() => ({
        error: "User name already taken!",
      }));
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.dispatch(
        addUser({ email: this.state.email, user: this.state.user, password })
      );
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <label>Email: </label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            onChange={this.emailOnChange}
          />
          <br />
          <label>User Name: </label>
          <input
            type="text"
            required
            placeholder="Enter a user name"
            onChange={this.userOnChange}
          />
          <br />
          <label>Password: </label>
          <input type="password" required onChange={this.passwordOnChange} />
          <br />
          <label>Confirm password: </label>
          <input
            type="password"
            required
            onChange={this.confirmPasswordOnChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.signUp,
});

export default connect(mapStateToProps)(SignUpPage);
