import {AnyAction, configureStore} from "@reduxjs/toolkit";
import {profileReducer} from "features/profile/profile-reducer";
import {usersReducer} from "features/users/users-reducer";
import {dialogsReducer} from "features/dialogs/dialogs-reducer";
import {authReducer} from "features/login/auth-reducer";
import {combineReducers} from "redux";
import {ThunkAction} from "redux-thunk";
import {appReducer} from "app/appSlice";


const rootReducer = combineReducers({
    profile: profileReducer,
    users: usersReducer,
    dialogs: dialogsReducer,
    app: appReducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

