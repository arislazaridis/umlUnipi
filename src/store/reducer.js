import { LOGIN } from "./actions";
import { LOGINADMIN } from "./actions";

const initialState = {
  loginUser: false,
  loginAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginUser: action.payload,
      };
    case LOGINADMIN:
      return {
        ...state,
        loginAdmin: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
