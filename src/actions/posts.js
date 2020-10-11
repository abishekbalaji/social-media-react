const addPost = ({ user_id, post_id, post, createdAt }) => ({
  type: "ADD_POST",
  details: {
    user_id,
    post_id,
    post,
    createdAt,
  },
});

const editPost = (post_id) => ({
  type: "EDIT_POST",
  post_id,
});

const removePost = (post_id) => ({
  type: "REMOVE_POST",
  post_id,
});
