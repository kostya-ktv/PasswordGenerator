import { GENERATE_PASSWORD_ACTION, SAVE_PASSWORD_ACTION } from "../constants";
import { ACTION_TYPE, PASSWORD_STATE_TYPE } from "../types"

const INITIAL_PASSWORD_STATE: PASSWORD_STATE_TYPE = {
   password: 'string',
   parameters: {
   passwordLength: 6,
   includeNumbers: false,
   includeLowerCase: false,
   beginWithALetter: false,
   includeSymbols: false,
   noSimilarCharacters: false,
   noDuplicateCharacters: false,
   saveInCookie: false
   }
}

export const passwordReducer = (state = INITIAL_PASSWORD_STATE, action: ACTION_TYPE) => {
   switch (action.type) {
      case SAVE_PASSWORD_ACTION: return {...state, ...action.payload}
      case GENERATE_PASSWORD_ACTION: return {...state, password: 'HELLO'}
   
      default: return state
   }
}