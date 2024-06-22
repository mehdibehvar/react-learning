import { createContext, useReducer } from "react";
import cookies from 'js-cookie';

export const userStore = createContext();
const initialState = {
  loading: false,
  token: cookies.get("token") ? JSON.parse(cookies.get("token")) : null,
  error: null,
  username: "",
  password: "",
};
export const actionType = {
  login_request: "LOGIN-REQUEST",
  login_success: "LOGIN-SUCCESS",
  logout_user: "LOGOUT-USER",
  login_error: "LOGIN-ERROR",
  update_userInfo: "UPDATE-USERINFO",
  get_user_info: "GET-USER-INFO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.login_request:
      return {
        ...state,
        loading: true,
      };
    case actionType.login_success:{
        const payload=action.payload;
        cookies.set('token',payload.token)
        return {
            ...state,
              loading: false,
              token: payload.token,
              username:payload.username,
              password:payload.password
          };
    }
    case actionType.login_error:
      return {
        ...state,
          loading: false,
          error: action.payload,
      };
    case actionType.get_user_info:
      return {
        ...state,
          loading: false,
      };
    case actionType.logout_user:
      return {
        ...state,
          loading: false,
          token: null,
          username: "",
          password: "",
      };

    default:
      return state;
  }
};

const UserStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <userStore.Provider value={value}>{children}</userStore.Provider>;
};

export default UserStoreProvider;
