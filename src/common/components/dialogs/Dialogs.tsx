import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../redux/store";
import {setActiveUserIdAC} from "../../../redux/dialogs-reducer";


export const Dialogs = () => {

    const dialogs = useSelector((state: storeType) => state.dialogs)

    const dispatch = useDispatch()
    const userList = dialogs.users.map((el) => <User key={el.id} onClick={() => dispatch(setActiveUserIdAC(el.id))}>{el.name}</User>)

    const messageUserList = dialogs.messages[dialogs.activeUserId].me
    const messageMeList = dialogs.messages[dialogs.activeUserId].userMessage

    const combinedMessages = []
    const maxLength = Math.max(messageUserList.length, messageMeList.length )

    for(let i=0; i< maxLength; i++){
        if(messageUserList[i]){
            combinedMessages.push({type:'user', text: messageUserList[i]})
        }
        if(messageMeList[i]){
            combinedMessages.push({type:'me', text: messageMeList[i]})
        }
    }

    return (
        <DialogsWrapper>

            <MessagesWrapper>
                {combinedMessages.map((message,index)=>(
                    <MessageWrapper key={index} type={message.type}>
                        <Messages type={message.type}>
                            {message.text}
                        </Messages>
                        <Triangle type={message.type}/>
                    </MessageWrapper>
                ))}
            </MessagesWrapper>
            <UsersWrapper>
                {userList}
            </UsersWrapper>
        </DialogsWrapper>
    );
};

const DialogsWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 24px;
  margin: 0 auto;
  justify-content: space-around;
  width: 60%;

`

const UsersWrapper = styled.div`
  flex: 0 0 30%; /* Занимает 30% ширины родительского блока */
  flex-flow: column;
  background-color: rgba(30, 31, 38, 0.63);
  display: flex;
  justify-items: center;
  align-items: center;
  
`

const User = styled.div`
  cursor: pointer;
  width: max-content;
  margin: 10px;
`

//====================================================================

const MessagesWrapper = styled.div`
  flex: 1; /* Занимает оставшуюся ширину родительского блока */
  height: 680px;
  //padding-right: 100px;
  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #494957;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #2e2f3a;
    border-radius: 5px;
  }

`

const Messages = styled.span<{type:string}>`
  background-color: ${props => props.type === 'me' ? '#494957' : '#38438c'};
  border-radius: ${props => props.type === 'me' ? '7px 7px 2px 7px' : '7px 7px 7px 2px'} ;
  width: max-content;
  padding: 10px;
  margin: 5px;
  font-size: 14px;

`

const MessageWrapper = styled.div<{type:string}>`
  display: flex;
  justify-content: ${props => props.type === 'me' ? 'flex-end' : 'flex-start'};
`

const Triangle = styled.div<{type:string}>`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid ${props => props.type === 'me' ? '#494957' : 'rgba(56,67,140,0)'};
  transform: ${props => props.type === 'me' ? 'rotate(35deg)' : 'rotate(215deg)'};
  position: relative;
  top: ${props => props.type === 'me' ? '35px' : '0px'};
  right: ${props => props.type === 'me' ? '19px' : '0px'};
  margin-bottom: 5px;
`
//====================================================================

