import React from "react";

export default class SignUpPage extends React.Component {
  onSubmit = (e) => {
    e.preventdefault();
  };
  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>
        <form onSubmit={this.onSubmit}>
          <label>Email: </label>
          <input type="email" required placeholder="Enter your email" />
          <br />
          <label>User Name: </label>
          <input type="text" required placeholder="Enter a user name" />
          <br />
          <label>Password: </label>
          <input type="password" required />
          <br />
          <label>Confirm password: </label>
          <input type="password" required />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
