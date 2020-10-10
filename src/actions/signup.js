import { v4 as uuidv4 } from "uuid";

export const addUser = ({ email, user, password }) => ({
  type: "ADD_USER",
  details: {
    id: uuidv4(),
    email,
    user,
    password,
  },
});

export const removeUser = (id) => ({
  type: "REMOVE_USER",
  id,
});
