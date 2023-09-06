import {RootState} from "app/store";


export const isLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const id = (state: RootState) => state.auth.id