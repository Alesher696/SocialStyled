import {Dispatch} from "redux";
import {authAPI} from "../common/api/api";
import {setIsLoggedInAC, setUserDataAC} from "../redux/auth-reducer";


export type appActions = setIsInitializedType

type initialStateType = {
    isInitialized: boolean
}

const initialState = {
    isInitialized: false,
}

export const appReducer = (state: initialStateType = initialState, action: appActions) => {
    switch (action.type) {
        case "APP/SET-IS-INITIALIZED": {
            return {...state, isInitialized: action.payload.isInitialized}
        }
        default:
            return state;
    }
}


export type setIsInitializedType = ReturnType<typeof setIsInitializedAC>

export const setIsInitializedAC = (isInitialized: boolean) => {
    return {
        type: 'APP/SET-IS-INITIALIZED',
        payload: {
            isInitialized
        }
    } as const
}

export const initializeAppTC = () => {
    return async (dispatch: Dispatch) => {
        const result = await authAPI.authMe()
        if (result.data.resultCode === 0) {
            dispatch(setUserDataAC(result.data.data))
            dispatch(setIsLoggedInAC(true))

            // } else if (res.data.resultCode === 1) {
            //         handleServerAppError(res.data, dispatch)
            //     }
        }
        dispatch(setIsInitializedAC(true))
    }
}