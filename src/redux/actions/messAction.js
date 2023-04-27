import { AUTH_MESS } from "../types";

const sendMessenger = payload => {
    return {
      type: AUTH_MESS.MESS,
      payload,
    };
  };

  
  export {sendMessenger};