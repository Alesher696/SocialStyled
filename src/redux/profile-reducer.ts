export type profileActions = addPostACType

type postType = {
    data:string
    id:number
    like: number
}

type initialProfileStateType = {
    posts: postType[]
    newPostText: string
    profile: null
}

    const initialState = {
    posts: [
        {id: 1, data: "Hello its my first", like: 9},
        {id: 2, data: "Hello its my second", like: 15},
        {id: 3, data: "What's up guys?", like: 2},
        {id: 4, data: "What's up guys?", like: 2},
        {id: 5, data: "What's up guys?", like: 2},
        {id: 6, data: "What's up guys?", like: 2},
    ],
    newPostText: "What's News?",
    profile : null

}

export const profileReducer = (state: initialProfileStateType = initialState, action: profileActions):initialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state}

        default:
            return state
    }
}

export type addPostACType = ReturnType<typeof addPostAC>

export const addPostAC = () =>{
    return {
        type:'ADD-POST'
    }
}