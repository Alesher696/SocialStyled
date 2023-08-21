import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../redux/store";
import {getMessagesListTC, messageType, setActiveUserIdAC} from "../../../redux/dialogs-reducer";
import {NavLink} from "react-router-dom";


export const Dialogs = () => {

    const dialogs = useSelector((state: storeType) => state.dialogs)
    const authId = useSelector((state: storeType) => state.auth.id)
    const dispatch = useDispatch()

    const userOnClickHandler = (userId: number) => {
        dispatch(getMessagesListTC(userId))
        dispatch(setActiveUserIdAC(userId))
    }

    console.log('dialogs is rendered ')

    const userList = dialogs.users.map((el) =>
        <NavLink to={`/dialogs/${el.userId}/messages`} key={el.userId}>
            <User onClick={() => userOnClickHandler(el.userId)}>{el.userName}
            </User>
        </NavLink>
    )

    const combinedMessages: messageType[] = []

    const messagesWrapperRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (messagesWrapperRef.current) {
            messagesWrapperRef.current.scrollTop = messagesWrapperRef.current.scrollHeight;
        }
    }, [combinedMessages])



    return (
        <DialogsWrapper>
            <MessagesWrapper ref={messagesWrapperRef}>
                <MessagesList dialogs={dialogs} authId={authId}/>
            </MessagesWrapper>
            <UsersWrapper>
                {userList}
            </UsersWrapper>
            {/*<ChatMessages/>*/}
        </DialogsWrapper>
    );
};


const MessagesList = (props: any) => {

    const {dialogs, authId} = props

    if (!dialogs.messages[dialogs.activeUserId]) {
        return null
    } else
        return (
            <MessageWrapper>
                {dialogs.messages[dialogs.activeUserId].map((message: messageType) => (
                    <Messages key={message.id} authId={authId} senderId={message.senderId}>
                        {message.body}
                    </Messages>
                ))}
            </MessageWrapper>
        )
};

const DialogsWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 24px;
  margin: 0 auto;
  justify-content: space-around;
  width: 80%;
`

const UsersWrapper = styled.div`
  flex: 0 0 20%; /* Занимает 30% ширины родительского блока */
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

const Messages = styled.span<{authId:number, senderId:number}>`
  background-color: ${props => props.authId === props.senderId ? '#38438c' : '#494957'};
  border-radius: ${props => props.authId === props.senderId ? '7px 7px 2px 7px' : '7px 7px 7px 2px'};
  width: max-content;
  padding: 10px;
  margin: 5px;
  font-size: 14px;
`

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

// const Triangle = styled.div<{authId:number, senderId:number}>`
//   width: 0;
//   height: 0;
//   border-left: 10px solid transparent;
//   border-right: 10px solid transparent;
//   border-bottom: 15px solid ${props => props.authId === props.senderId ? '#494957' : 'rgba(56,67,140,0)'};
//   transform: ${props => props.authId === props.senderId ? 'rotate(35deg)' : 'rotate(215deg)'};
//   position: relative;
//   top: ${props => props.authId === props.senderId ? '35px' : '0px'};
//   right: ${props => props.authId === props.senderId ? '19px' : '0px'};
//   margin-bottom: 5px;
// `
//====================================================================

