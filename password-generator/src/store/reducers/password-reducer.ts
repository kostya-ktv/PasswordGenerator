import { PasswordParameters } from "../../models/PasswordParameters";
import { GENERATE_PASSWORD_ACTION, SAVE_PARAMETERS_ACTION } from "../constants";
import { ACTION_TYPE, PASSWORD_STATE_TYPE } from "../types"

const INITIAL_PASSWORD_STATE: PASSWORD_STATE_TYPE = {
   password: 'Press the button to generate a password',
   parameters: new PasswordParameters()
}

export const passwordReducer = (state = INITIAL_PASSWORD_STATE, action: ACTION_TYPE) => {
   
   switch (action.type) {
      case SAVE_PARAMETERS_ACTION: return {...state, parameters: {...action.payload}}
      case GENERATE_PASSWORD_ACTION: return {...state, password: action.payload}
   
      default: return state
   }
}