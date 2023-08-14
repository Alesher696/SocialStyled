import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {profileActionsType, profileReducer} from "../redux/profile-reducer";
import {usersReducer} from "../redux/users-reducer";
import {dialogsReducer} from "../redux/dialogs-reducer";
import {appReducer} from "../redux/app-reducer";
import {authReducer} from "../redux/auth-reducer";


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
export const store = createStore(rootReducer);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>


export type ActionsType = profileActionsType

