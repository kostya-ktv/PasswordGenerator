import { PasswordParameters } from "../models/PasswordParameters"
import { rootReducer } from "./reducers/root-reducer"
export type ACTION_TYPE = {
   type: string,
   payload?: any
}

export type PASSWORD_STATE_TYPE = {
   password: string,
   parameters: PasswordParameters
}


export type STORE_TYPE = ReturnType<typeof rootReducer>
