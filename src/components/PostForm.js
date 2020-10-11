import React from "react";

export default class PostForm extends React.Component {
  state = {
    post: "",
  };

  postOnChange = (e) => {
    const post = e.target.value;
    this.setState = () => ({
      post,
    });
  };

  onSubmit = (e) => {
      e.preventDefault;
      
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Create a post</label>
          <textarea
            placeholder="What's on your mind?"
            onChange={this.postOnChange}
          />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
