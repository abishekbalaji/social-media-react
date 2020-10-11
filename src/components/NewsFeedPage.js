import React from "react";
import { connect } from "react-redux";

import PostForm from "./PostForm";

class NewsFeedPage extends React.Component {
  userName = () => {
    const users = this.props.users;
    const currentUserId = this.props.match.params.id;
    const user = users.find((user) => user.id === currentUserId);
    return user.user;
  };
  render() {
    return (
      <div>
        <p>Welcome {this.userName()}</p>
        <h1>News Feed</h1>
        {/* <PostForm /> */}
        {/* <Posts /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.signUp,
});

export default connect(mapStateToProps)(NewsFeedPage);
