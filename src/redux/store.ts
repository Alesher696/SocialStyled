import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {profileActions, profileReducer} from "../redux/profile-reducer";
import {usersActions, usersReducer} from "../redux/users-reducer";
import {dialogsActions, dialogsReducer} from "../redux/dialogs-reducer";
import {appActions, appReducer} from "../redux/app-reducer";
import {authActions, authReducer} from "../redux/auth-reducer";


declare global {
    interface Window {
        REDUX_DEVTOOLS_EXTENSION_COMPOSE?: typeof compose;
    }
}

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;


const rootReducer = combineReducers({
    profile: profileReducer,
    users: usersReducer,
    dialogs: dialogsReducer,
    app: appReducer,
    auth: authReducer
})

export type storeType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>


export type ActionsType = profileActions | usersActions | appActions | dialogsActions  | authActions

// @ts-ignore
window.store = store;
