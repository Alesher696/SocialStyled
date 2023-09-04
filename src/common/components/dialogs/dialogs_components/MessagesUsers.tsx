import React, {useEffect, useRef} from 'react';
import {AddMessage} from "./AddMessage";
import {initialStateType, messageType} from "redux/dialogs-reducer";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {CheckOutlined} from "@ant-design/icons";
import {RootState} from "app/store";


type MessageListProps = {
    dialogs: initialStateType
    authId: number | null
}
type MessagesUsersProps = {
    dialogs: initialStateType
}

export const MessagesUsers = (props: MessagesUsersProps) => {

    const authId = useSelector((state: RootState) => state.auth.id)

    const combinedMessages: messageType[] = []

    const messagesWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messagesWrapperRef.current) {
            messagesWrapperRef.current.scrollTop = messagesWrapperRef.current.scrollHeight;
        }
    }, [combinedMessages])

    return (
        <>
            <AddMessageWrapper>
                <MessagesWrapper ref={messagesWrapperRef}>
                    <MessagesList dialogs={props.dialogs} authId={authId}/>
                </MessagesWrapper>
                <AddMessage/>
            </AddMessageWrapper>
        </>
    );
};

const MessagesList = (props: MessageListProps) => {

    const {dialogs, authId} = props

    if (!dialogs.messages[dialogs.activeUserId!]) {
        return null
    } else
        return (
            <MessageWrapper>
                {dialogs.messages[dialogs.activeUserId!].map((message: messageType) => {

                    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    const addedAt = new Date(message.addedAt);
                    const hours = addedAt.getHours();
                    let minutes = addedAt.getMinutes();
                    const newDate = new Date()

                    if (minutes < 10) {
                        minutes = Number(`0${minutes}`);
                    }
                    const formattedDate = `${hours.toString()}:${minutes.toString().padStart(2, '0')}`;

                    return (
                        <MessageInnerWrapper key={message.id}>
                            <Message authid={authId} senderid={message.senderId}>
                                {message.body}
                            </Message>
                            <ViewWrapper>
                                <>
                                    {newDate.toDateString() !== addedAt.toDateString()
                                        ? daysOfWeek[addedAt.getDay()]
                                        : formattedDate}
                                    {message.viewed && <CheckOutlined rev/>}
                                </>
                            </ViewWrapper> 
                        </MessageInnerWrapper>
                    )
                })}
            </MessageWrapper>
        )
};

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
  max-width: 450px;
  height: max-content;
  padding: 10px;
  margin: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  overflow: hidden;
  
`

const MessageInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-right: 5px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.11);
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

const ViewWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-items: end;
  align-items: end;
  height: 10px;
  font-size: 10px;
  margin-bottom: 10px;
  gap: 10px;
  color: grey;
  margin-right: 5px;
`