import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../redux/store";
import {getMessagesListTC, messageType, setActiveUserIdAC} from "../../../redux/dialogs-reducer";
import {ChatMessages} from "../../../common/components/dialogs/ChatMessages";
import {NavLink} from "react-router-dom";


export const Dialogs = () => {

    const dialogs = useSelector((state: storeType) => state.dialogs)

    const dispatch = useDispatch()

    const userOnClickHandler = (userId: number) => {
        dispatch(getMessagesListTC(userId))
        dispatch(setActiveUserIdAC(userId))
    }

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
                <MessagesList dialogs={dialogs}/>
            </MessagesWrapper>
            <UsersWrapper>
                {userList}
            </UsersWrapper>
            {/*<ChatMessages/>*/}
        </DialogsWrapper>
    );
};

const MessagesList = (props: any) => {

    const {dialogs} = props

    if (!dialogs.messages[dialogs.activeUserId]) {
        return null; // or return some fallback JSX if desired
    } else {
        return dialogs.messages[dialogs.activeUserId].map((message:any) => (
            <div key={message.id}>
                {message.body}
            </div>
        ));
    }
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

// const Messages = styled.span`
//   background-color: ${props => props.type === 'me' ? '#494957' : '#38438c'};
//   border-radius: ${props => props.type === 'me' ? '7px 7px 2px 7px' : '7px 7px 7px 2px'};
//   width: max-content;
//   padding: 10px;
//   margin: 5px;
//   font-size: 14px;
//
// `
//
// const MessageWrapper = styled.div<{ type: string }>`
//   display: flex;
//   justify-content: ${props => props.type === 'me' ? 'flex-end' : 'flex-start'};
// `
//
// const Triangle = styled.div<{ type: string }>`
//   width: 0;
//   height: 0;
//   border-left: 10px solid transparent;
//   border-right: 10px solid transparent;
//   border-bottom: 15px solid ${props => props.type === 'me' ? '#494957' : 'rgba(56,67,140,0)'};
//   transform: ${props => props.type === 'me' ? 'rotate(35deg)' : 'rotate(215deg)'};
//   position: relative;
//   top: ${props => props.type === 'me' ? '35px' : '0px'};
//   right: ${props => props.type === 'me' ? '19px' : '0px'};
//   margin-bottom: 5px;
// `
//====================================================================

