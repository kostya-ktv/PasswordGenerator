import { rootReducer } from "./reducers/root-reducer"
export type ACTION_TYPE = {
   type: string,
   payload?: any
}

export type PASSWORD_STATE_TYPE = {
   password: string,
   parameters: PASSWORD_PARAMETERS_TYPE
}

export type PASSWORD_PARAMETERS_TYPE = {
   passwordLength: number,
   includeNumbers: boolean,
   includeLowerCase: boolean,
   beginWithALetter: boolean,
   includeSymbols: boolean,
   noSimilarCharacters: boolean,
   noDuplicateCharacters: boolean,
   saveInCookie: boolean
}
export type STORE_TYPE = ReturnType<typeof rootReducer>
