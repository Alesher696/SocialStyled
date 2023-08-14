

export type appActions =addPostACType

type initialStateType={

}

const initialState={

}


export const appReducer = (state: initialStateType = initialState, action: appActions)=>{
return state
}


export type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () =>{
    return {
        type:'ADD-POST'
    }
}