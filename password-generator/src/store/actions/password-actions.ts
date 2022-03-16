import { Dispatch } from "redux";
import { GENERATE_PASSWORD_ACTION, SAVE_PASSWORD_ACTION } from "../constants";
import { PASSWORD_PARAMETERS_TYPE } from "../types";

export const savePassword_action = (parameters: PASSWORD_PARAMETERS_TYPE,dispatch: Dispatch) => {
   dispatch({type: SAVE_PASSWORD_ACTION, payload: parameters})
}
export const generatePassword_action = (dispatch: Dispatch) => {
   dispatch({type: GENERATE_PASSWORD_ACTION})
}