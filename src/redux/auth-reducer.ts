

export type authActions = addPostACType

type initialStateType={

}

const initialState={

}


export const authReducer = (state: initialStateType = initialState, action: authActions)=>{
return state
}


export type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () =>{
    return {
        type:'ADD-POST'
    }
}