
export type dialogsActions = addPostACType

type initialStateType={

}

const initialState={

}


export const dialogsReducer = (state: initialStateType = initialState, action: dialogsActions)=>{
return state
}

export type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () =>{
    return {
        type:'ADD-POST'
    }
}