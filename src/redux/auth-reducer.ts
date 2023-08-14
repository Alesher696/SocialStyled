export type authActions = setUserDataType

export type initialAuthStateType = {
    id: number | null
    login: null | string
    email: null | string
}

const initialState: initialAuthStateType = {
    id: 28038,
    login: null,
    email: null
}


export const authReducer = (state: initialAuthStateType = initialState, action: authActions):initialAuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return state
        }
        default:
            return state
    }
}

type setUserDataType = ReturnType<typeof setUserDataAC>
const setUserDataAC = () => {
    return {
        type: "SET-USER-DATA"
    }
}

export const authMeTC = () => {

}


export const authLoginTC = () => {

}