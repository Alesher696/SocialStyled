import {Dispatch} from "redux";
import {dialogsAPI} from "../common/api/api";


export type dialogsActions = setActiveUserIdType | addMessageType | addMessagesInStateType | setEntityUserInArrayType

type userType = {
    userId: number
    userName: string
}
export type messageType = {
    id: string,
    body: string,
    translatedBody: null,
    addedAt: Date,
    senderId: number,
    senderName: string,
    recipientId: number,
    viewed: boolean
}
export type initialStateType = {
    users: userType[]
    messages: {
        [userId: number]: messageType[]
    }
    activeUserId: number
    newMessage: string
}

const initialState: initialStateType = {
    users: [


        // {userId: 5, userName: 'Andrey'},
    ],
    messages: {


        // [3]: {userMessage: ['hello by Olga', 'u can send it using mobile bank?', 'im fine, thanks!'], me: ['hello', 'i have money for u', 'i need your phone number']},
        // [29842]: {userMessage: ['hello','hehe'], me: ['hello','hehe']},
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
        case "ADD-MESSAGES-IN-STATE": {
            return {...state, messages: {[action.payload.userId]: action.payload.messages}}
        }
        case 'CREATE-ENTITY-USER': {
            const newUser = {userId: action.payload.userId, userName: action.payload.userName}
            const existingUserIndex = state.users.findIndex(user => user.userId === newUser.userId);

            if (existingUserIndex !== -1) {
                return {...state}
            } else {
                return {...state, users: [...state.users, newUser]};
            }
        }
        default:
            return state
    }
}

export type setEntityUserInArrayType = ReturnType<typeof setEntityUserInArrayAC>

export const setEntityUserInArrayAC = (userId: number, userName: string) => {
    return {
        type: 'CREATE-ENTITY-USER',
        payload: {
            userId, userName
        }
    } as const
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

export type addMessagesInStateType = ReturnType<typeof addMessagesInStateAC>

const addMessagesInStateAC = (userId: number, messages:messageType[]) => {
    return {
        type: 'ADD-MESSAGES-IN-STATE',
        payload: {
            userId,
            messages
        }
    } as const
}

export const getMessagesListTC = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const result = await dialogsAPI.getMessageList(userId)
        dispatch(addMessagesInStateAC(userId, result.data.items))
    }
}

//============================================================================



