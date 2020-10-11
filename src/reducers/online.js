const onlineDefaultState = [];

export default (state = onlineDefaultState, action) => {
  switch (action.type) {
    case "ADD_USER_ONLINE":
      return [...state, action.id];
    case "REMOVE_USER_ONLINE":
      return state.filter((id) => id !== action.id);
    default:
      return state;
  }
};
