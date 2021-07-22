import { setUser, logout } from "./../redux/actions";
import axios from "axios";
import AuthService from "../services/AuthService";

export const logoutHandler = () => {
  return async (dispatch: any) => {
    try {
      const response = await AuthService.Logout()
      dispatch(logout());
      console.log(response)
      window.location.reload();
    } catch (e) {
      console.log("Something went wrong");
    }
  };
};

export const SignInHandler = (
  mail: string, 
  password: string
  ) => {
  return async (dispatch: any) => {
    try {
      const response = await AuthService.SignIn(mail, password)
      dispatch(setUser(response.data.data.token));
      localStorage.setItem("token", response.data.data.token);
      window.location.reload();
    } catch (e) {
      console.log('Login: ', e.response.data);
    }
  };
};

export const RegisterHandler = (
  login: string,
  mail: string,
  password: string
) => {
  return async (dispatch: any) => {
    try {
      const response = await AuthService.Register(login, mail, password)
      dispatch(setUser(response.data.data.token));
      localStorage.setItem("token", response.data.data.token);
      window.location.reload();
    } catch (e) {
      console.log('Register: ', e.response.data.data);
    }
  };
};
