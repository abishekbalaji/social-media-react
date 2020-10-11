const loginDefaultState = [
  {
    id: "1",
    user: "admin",
    password: "password",
  },
];

export default (state = loginDefaultState, action) => {
  switch (action.type) {
    case "ADD_LOGIN_INFO":
      return [...state, action.credentials];
    case "REMOVE_LOGIN_INFO":
    default:
      return state;
  }
};
