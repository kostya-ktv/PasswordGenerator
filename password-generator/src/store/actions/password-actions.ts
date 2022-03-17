import { Dispatch } from "redux";
import { PasswordParameters } from "../../models/PasswordParameters";
import { generatePassword } from "../../services/password.service";
import { GENERATE_PASSWORD_ACTION, SAVE_PARAMETERS_ACTION } from "../constants";

export const savePassword_action = (parameters: PasswordParameters,dispatch: Dispatch) => {
   dispatch({type: SAVE_PARAMETERS_ACTION, payload: parameters})
}

export const generatePassword_action = (parameters: PasswordParameters, dispatch: Dispatch) => {
   const password = generatePassword(parameters)
   dispatch({type: GENERATE_PASSWORD_ACTION, payload: password})
}