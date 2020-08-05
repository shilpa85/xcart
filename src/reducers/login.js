import {
    LOGIN,
    LOGIN_RESULT,
  } from "../constants/login";

  const initialState = {
    loginData: {},
    loginResult: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      
      case LOGIN:
        return {
          ...state,
          loginData: action.data,
        };
  
      case LOGIN_RESULT:
        return {
          ...state,
          loginResult: action.data,
          loginData:{},
        };

      default:
        return state;
    }
  };
  