import { AnyAction } from "redux";
import { IUser } from "./../../models/response/IUser";

export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

type TUserState = {
  user: IUser,
  token: string,
  isAuth: boolean,
}

export const initialState: TUserState = {
  user: {} as IUser,
  token: '',
  isAuth: false,
};

export default function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        token: action.payload,
        isAuth: true,
      };
    // case CHECK_USER:
    //   return {
    //     ...state,
    //     token: action.payload,
    //     isAuth: true,
    //   };
    case LOGOUT:
      localStorage.removeItem("token");  
      return {
        ...state,
        user: {},
        isAuth: false,
      };
    default:
      return state;
  }
}
