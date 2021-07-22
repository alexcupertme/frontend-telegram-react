import { combineReducers } from "redux";
import userReducer from "./userReducer";

export type RootState = {
  isAuth: boolean
}

export const rootReducer = combineReducers({
  user: userReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

