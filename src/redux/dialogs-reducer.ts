import {Dispatch} from "redux";
import {log} from "util";

export type dialogsActions = setActiveUserIdType | addMessageType | addMessageInStateType

type userType = {
    id: number
    name: string
}
type dialogType = {
    userMessage: string[]
    me: string[]
}
export type initialStateType = {
    users: userType[]
    messages: {
        [id: number]: dialogType
    }
    activeUserId: number
    newMessage: string
}

const initialState: initialStateType = {
    users: [
        {id: 1, name: 'chatGPT'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Dimych'},
        {id: 5, name: 'Andrey'},
    ],
    messages: {
        [1]: {userMessage: ['hello by chatGPT', 'all is a cool', 'im fine, thanks!'], me: ['hi man', 'whats up?', 'how are u?']},
        [2]: {userMessage: ['hello by Alex', 'all is a cool', 'im fine, thanks!'], me: ['hi man', 'whats up?', 'how are u?']},
        [3]: {userMessage: ['hello by Olga', 'all is a cool', 'im fine, thanks!'], me: ['hi man', 'whats up?', 'how are u?']},
        [4]: {userMessage: ['hello by Dimka', 'all is a cool', 'im fine, thanks!'], me: ['hi man', 'whats up?', 'how are u?']},
        [5]: {userMessage: ['hello by Andrey', 'all is a cool', 'im fine, thanks!'], me: ['hi man', 'whats up?', 'how are u?']},

    },
    activeUserId: 1,
    newMessage: ''
}


export const dialogsReducer = (state: initialStateType = initialState, action: dialogsActions) => {
    switch (action.type) {
        case 'SET-ACTIVE-USER-ID': {
            return {...state, activeUserId: action.payload.userId}
        }
        case "ADD-NEW-MESSAGE": {
            return {...state, newMessage: action.payload.message}
        }
        case "ADD-MESSAGE-IN-STATE": {
            const messageFromBot = "I'm really sorry. I'm just a bot... And my Creator is teaching me right now!"
            const userId = action.payload.userId
            const newMessage = state.newMessage
            const updatedMessages =  {...state.messages, [userId]:{
                userMessage:[...state.messages[userId].userMessage, messageFromBot],
                    me:[...state.messages[userId].me, newMessage]
                }}

            return {...state, messages: updatedMessages}
        }
        default:
            return state
    }
}

export type setActiveUserIdType = ReturnType<typeof setActiveUserIdAC>

export const setActiveUserIdAC = (userId: number) => {
    return {
        type: 'SET-ACTIVE-USER-ID',
        payload: {
            userId
        }
    } as const
}

export type addMessageType = ReturnType<typeof addNewMessageAC>

export const addNewMessageAC = (message: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        payload: {
            message
        }
    } as const
}

export type addMessageInStateType = ReturnType<typeof addMessageInStateAC>

const addMessageInStateAC = (userId:number) => {
    return {
        type: 'ADD-MESSAGE-IN-STATE',
        payload:{
            userId
        }
    } as const
}

export const dialogCreatorTC = (userId:number) => {
    return (dispatch: Dispatch) => {

        dispatch(addMessageInStateAC(userId))
        // dispatch(addMessageInStateAC())
        // dispatch(addMessageInStateAC())

    }
}