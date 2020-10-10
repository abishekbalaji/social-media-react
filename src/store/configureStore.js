import { createStore, combineReducers } from "redux";

import loginReducer from "../reducers/login";
import signUpReducer from "../reducers/signup";

// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      login: loginReducer,
      signUp: signUpReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
