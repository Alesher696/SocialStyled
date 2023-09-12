import {Instance} from "common/api";


export const dialogsAPI={
    getMessageList(userId:number){
        return Instance.get(`dialogs/${userId}/messages?count=20`)
    },
    sendMessage(userId:number, message:string){
        return Instance.post(`dialogs/${userId}/messages`, {body: message})
    },
    getDialogs(){
        return Instance.get(`https://social-network.samuraijs.com/api/1.0/dialogs`)
    },
    createDialog(userId:number){
        return Instance.put(`dialogs/${userId}`)
    },
    listOfNewMessages(){
        return Instance.get(`dialogs/messages/new/count`)
    }
}