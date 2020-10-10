export const addLoginInfo = ({ id, user, password } = {}) => ({
  type: "ADD_LOGIN_INFO",
  credentials: {
    id,
    user,
    password,
  },
});

export const removeLoginInfo = (id) => ({
  type: "REMOVE_LOGIN_INFO",
  id,
});

// export const checkLoginInfo = ({ user, password } = {}) => ({
//   type: "CHECK_LOGIN_INFO",
//   credentials: {
//     user,
//     password,
//   },
// });
