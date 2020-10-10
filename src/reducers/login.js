const loginDefaultState = [
  {
    id: 1,
    user: "admin",
    password: "password",
  },
];

export default (state = loginDefaultState, action) => {
  switch (action.type) {
    case "ADD_LOGIN_INFO":
    case "REMOVE_LOGIN_INFO":
  }
};
