import { LOGIN } from "./actions";

const initialState = {
  loginUser: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginUser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
