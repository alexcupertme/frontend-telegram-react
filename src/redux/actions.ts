// import { IUser } from './../models/response/IUser';
import { LOGOUT, SET_USER } from "./reducers/userReducer";

export const setUser = (token: string) => ({
  type: SET_USER,
  payload: token,
})

export const logout = () => ({
  type: LOGOUT,
})