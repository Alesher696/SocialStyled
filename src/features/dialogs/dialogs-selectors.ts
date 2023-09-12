import {RootState} from "app/store";


export const selectActiveUserId = (state: RootState) => state.dialogs.activeUserId
export const selectMessages = (state: RootState) => state.dialogs.messages
export const selectDialogs = (state: RootState) => state.dialogs.all_dialogs
