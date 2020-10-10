const signUpDefaultState = [];

export default (state = signUpDefaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.details];
    case "REMOVE_USER":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
