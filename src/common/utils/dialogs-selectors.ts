import {RootState} from "app/store";


export const activeUserId = (state: RootState) => state.dialogs.activeUserId
export const messages = (state: RootState) => state.dialogs.messages
export const dialogs = (state: RootState) => state.dialogs.all_dialogs
