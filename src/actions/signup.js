export const addUserSignUp = ({ id, email, user, password }) => ({
  type: "ADD_USER",
  details: {
    id,
    email,
    user,
    password,
  },
});

export const removeUser = (id) => ({
  type: "REMOVE_USER",
  id,
});
