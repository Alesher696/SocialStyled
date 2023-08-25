import React, {useEffect, useRef} from 'react';
import styled, {StyleSheetManager} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../redux/store";
import {getMessagesListTC, initialStateType, messageType, setActiveUserIdAC} from "../../../redux/dialogs-reducer";
import {NavLink} from "react-router-dom";
import {AddMessage} from "../dialogs/AddMessage";

type MessageListProps = {
    dialogs: initialStateType
    authId: number | null
}
export const Dialogs = () => {

    const dialogs = useSelector((state: storeType) => state.dialogs)
    const authId = useSelector((state: storeType) => state.auth.id)
    const dispatch = useDispatch()

    const userOnClickHandler = (userId: number) => {
        dispatch(setActiveUserIdAC(userId))
        dispatch(getMessagesListTC(userId))
    }

    console.log('dialogs is rendered ')

    const userList = dialogs.users.map((el) =>

        <User key={el.userId} onClick={() => userOnClickHandler(el.userId)}>{el.userName}
            <NavLink to={`/dialogs/${el.userId}/messages`}>
            </NavLink>
        </User>
    )

    const combinedMessages: messageType[] = []

    const messagesWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (messagesWrapperRef.current) {
            messagesWrapperRef.current.scrollTop = messagesWrapperRef.current.scrollHeight;
        }
    }, [combinedMessages])

    return (
        <DialogsWrapper>
            <AddMessageWrapper>
                <MessagesWrapper ref={messagesWrapperRef}>
                    <MessagesList dialogs={dialogs} authId={authId}/>
                </MessagesWrapper>
                <AddMessage/>
            </AddMessageWrapper>
            <UsersWrapper>
                {userList}
            </UsersWrapper>
        </DialogsWrapper>
    );
};

const MessagesList = (props: MessageListProps) => {

    const {dialogs, authId} = props

    if (!dialogs.messages[dialogs.activeUserId]) {
        return null
    } else
        return (
            <MessageWrapper>
                {dialogs.messages[dialogs.activeUserId].map((message: messageType) => (
                    <Message key={message.id} authid={authId} senderid={message.senderId}>
                        {message.body}
                    </Message>
                ))}
            </MessageWrapper>

        )
};

const DialogsWrapper = styled.div`
  color: white;
  font-size: 24px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const UsersWrapper = styled.div`
  flex-flow: column;
  background-color: #1a1a21;
  display: flex;
  height: max-content;
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #464646;
`

const User = styled.div`
  cursor: pointer;
  width: max-content;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
  padding-inline: 10px;
  background-color: #39404b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background-color: #3e4452;
  }
`

//====================================================================

const MessagesWrapper = styled.div`
  border-radius: 10px 6px 6px 10px;
  background-color: #1a1a21;
  width: 600px;
  display: flex;
  flex-direction: column;
  min-height: 800px;
  max-height: 800px;
  position: relative;
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

const Message = styled.span<{ authid: number | null, senderid: number }>`
  background-color: ${props => props.authid === props.senderid ? '#38438c' : '#494957'};
  border-radius: ${props => props.authid === props.senderid ? '7px 7px 2px 7px' : '7px 7px 7px 2px'};
  width: max-content;
  max-width: 559px;
  height: max-content;
  padding: 10px;
  margin: 5px;
  font-size: 14px;
`

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const AddMessageWrapper = styled.div`
  border: 1px solid #464646;
  border-radius: 10px 6px 6px 10px;
  display: flex;
  flex-direction: column;
`


