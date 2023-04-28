import { AUTH_MESS } from "../types";

const initialState = {
  messages: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_MESS.MESS:
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    default:
      return state;
  }
};

export default authReducer;