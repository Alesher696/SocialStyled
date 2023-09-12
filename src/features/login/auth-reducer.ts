import {Dispatch} from "redux";
import {authAPI} from "features/login/auth-api";


export type authActions = setUserDataType | setIsLoggedInType

export type initialAuthStateType = {
    id: null | number
    login: null | string
    email: null | string
    isLoggedIn: boolean
    rememberMe: boolean
}

const initialState: initialAuthStateType = {
    id: null,
    login: null,
    email: null,
    rememberMe: false,
    isLoggedIn: false
}

export const authReducer = (state: initialAuthStateType = initialState, action: authActions): initialAuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                id: action.payload.userData.id,
                email: action.payload.userData.email,
                login: action.payload.userData.login
            }
        }
        case "SET-IS-LOGGED-IN": {
            return {...state, isLoggedIn: action.payload.value}
        }
        default:
            return state
    }
}

type setUserDataType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (userData: initialAuthStateType) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            userData
        }
    } as const
}

type setIsLoggedInType = ReturnType<typeof setIsLoggedInAC>

export const setIsLoggedInAC = (value: boolean) => {
    return {
        type: 'SET-IS-LOGGED-IN',
        payload: {
            value
        }
    } as const
}

export const authLogInTC = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const result = await authAPI.logIn(email, password)
            if (result.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const authLogOutTC = () => {
    return async (dispatch: Dispatch) => {
        try {
            const result = await authAPI.logOut()
            if (result.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
            }
        } catch (e) {
            console.log(e)
        }
    }
}
