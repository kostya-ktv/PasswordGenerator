import { combineReducers } from "redux";
import { passwordReducer } from "./password-reducer";

export const rootReducer = combineReducers({
   password: passwordReducer
})