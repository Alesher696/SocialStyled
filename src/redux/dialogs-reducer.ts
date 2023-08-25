import {Dispatch} from "redux";
import {dialogsAPI} from "../common/api/api";


export type dialogsActions =
    setActiveUserIdType |
    addMessagesInStateType |
    setAllDialogsType

type dialogsType = {
    id: number,
    userName: string,
    hasNewMessages: boolean,
    lastDialogActivityDate: Date,
    lastUserActivityDate: Date,
    newMessagesCount: number,
    photos: {
        small: null | string,
        large: null | string
    }
}

export type messageType = {
    id: string,
    body: string,
    translatedBody: null,
    addedAt: Date,
    senderId: number,
    senderName: string,
    recipientId: number,
    viewed: boolean,
}

export type initialStateType = {
    all_dialogs: dialogsType[] | null
    messages: {
        [userId: number]: messageType[]
    }
    activeUserId: number | null
}

const initialState: initialStateType = {
    all_dialogs: null,
    messages: {},
    activeUserId: 1,
}

export const dialogsReducer = (state: initialStateType = initialState, action: dialogsActions) => {
    switch (action.type) {
        case 'SET-ACTIVE-USER-ID': {
            return {...state, activeUserId: action.payload.userId}
        }

        case "ADD-MESSAGES-IN-STATE": {
            return {...state, messages: {[action.payload.userId]: action.payload.messages}}
        }
        case "SET-ALL-DIALOGS":{
            return{...state, all_dialogs: action.payload.all_dialogs}
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

export type setAllDialogsType = ReturnType<typeof setAllDialogsAC>

const setAllDialogsAC = (all_dialogs:dialogsType[]) => {
    return {
        type: 'SET-ALL-DIALOGS',
        payload: {
            all_dialogs
        }
    } as const
}

export const getMessagesListTC = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const result = await dialogsAPI.getMessageList(userId)
        dispatch(addMessagesInStateAC(userId, result.data.items))
    }
}

export const sendMessageTC = (userId:number, message:string) =>{
    return async (dispatch:Dispatch)=>{
        try {
            const result = await dialogsAPI.sendMessage(userId, message)
            if (result.data.resultCode === 0){
            }
        }
       catch (e) {
           console.log(e)
       }
    }
}

export const getDialogsTC = () =>{
    return async (dispatch:Dispatch)=>{
        const result = await dialogsAPI.getDialogs()
        dispatch(setAllDialogsAC(result.data))
    }
}
//============================================================================



