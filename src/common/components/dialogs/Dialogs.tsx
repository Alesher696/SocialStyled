import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../redux/store";
import {getMessagesListTC, messageType, setActiveUserIdAC} from "../../../redux/dialogs-reducer";
import {NavLink, useLocation} from "react-router-dom";
import {AddMessage} from "../dialogs/AddMessage";


export const Dialogs = () => {

    const dialogs = useSelector((state: storeType) => state.dialogs)
    const authId = useSelector((state: storeType) => state.auth.id)
    const dispatch = useDispatch()

    const location = useLocation()
    const isDialogsLocation = location.pathname === '/dialogs' || location.pathname === `/dialogs/${dialogs.activeUserId}/messages`
    const activeChatUserLocation = location.pathname === `/dialogs/${dialogs.activeUserId}/messages`

    const userOnClickHandler = (userId: number) => {
        dispatch(getMessagesListTC(userId))
        dispatch(setActiveUserIdAC(userId))
    }

    console.log('dialogs is rendered ')

    const userList = dialogs.users.map((el) =>

        <User onClick={() => userOnClickHandler(el.userId)} isActive={activeChatUserLocation}>{el.userName}
            <NavLink to={`/dialogs/${el.userId}/messages`} key={el.userId}>
            </NavLink>
        </User>
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
                <AddMessageWrapper>
                    {isDialogsLocation && <AddMessage/>}
                </AddMessageWrapper>
            </MessagesWrapper>
            <UsersWrapper>
                {userList}
            </UsersWrapper>
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
  color: white;
  font-size: 24px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const UsersWrapper = styled.div`
  flex-flow: column;
  background-color: rgba(27, 31, 38, 0.12);
  display: flex;
  height: max-content;
  width: max-content;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #464646;


`

const User = styled.div<{isActive: boolean}>`
  cursor: pointer;
  width: max-content;
  //margin-bottom: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
  padding-inline: 10px;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background-color: #3b414d;
  }
`

//====================================================================

const MessagesWrapper = styled.div`
  border: 1px solid #464646;
  border-radius: 10px;
  background-color: rgba(27, 31, 38, 0.12);
  width: 800px;
`

const Messages = styled.span<{ authId: number, senderId: number }>`
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

const AddMessageWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
`;


