import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {getDialogsTC, setActiveUserIdAC} from "redux/dialogs-reducer";
import {MessagesList} from "./dialogs_components/MessagesUsers";
import {useAppDispatch, useAppSelector} from "common/hooks/selectors";
import {AddMessage} from "common/components/dialogs/dialogs_components/AddMessage";
import {selectActiveUserId, selectMessages} from "common/utils/dialogs-selectors";
import {UsersDialogs} from "common/components/dialogs/dialogs_components/UsersDialogs";
import {DoubleLeftOutlined} from "@ant-design/icons";




export const Dialogs = () => {

    console.log('dialogs is rendered ')

    const userIdIsActive = useAppSelector(selectActiveUserId);
    const dialogsMessages = useAppSelector(selectMessages);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDialogsTC())
    }, [])

    const messagesWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messagesWrapperRef.current) {
            if (userIdIsActive && dialogsMessages[userIdIsActive]) {
                messagesWrapperRef.current.scrollTop = messagesWrapperRef.current.scrollHeight;
            }
        }
    }, [userIdIsActive, dialogsMessages]);

    return (
        <DialogsWrapper>
            { !userIdIsActive ? '': <StyledBackButton onClick={()=> dispatch(setActiveUserIdAC(0))}>
                    <DoubleLeftOutlined rev={''} />
                </StyledBackButton>}
            <AddMessageWrapper>
                <MessagesWrapper ref={messagesWrapperRef}>
                    {!userIdIsActive ?<UsersDialogs/> : ''}
                    {userIdIsActive? <MessagesList/> : ''}
                </MessagesWrapper>
                {userIdIsActive ? <AddMessage/>: ''}
            </AddMessageWrapper>
        </DialogsWrapper>
    );
};

const StyledBackButton = styled.button`
  background-color: #2e2f3a;
  border-radius: 10px 10px 10px 10px;
  outline: none;
  border: none;
  color: white;
  position: relative;

  &:hover {
    background-color: #494957;
  }
`

const DialogsWrapper = styled.div`
  color: white;
  font-size: 24px;
  margin: 3em auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const AddMessageWrapper = styled.div`
  border: 1px solid #464646;
  border-radius: 10px 6px 6px 10px;
  display: flex;
  flex-direction: column;
  min-height: 740px;
`

const MessagesWrapper = styled.div`
  border-radius: 10px 6px 6px 10px;
  background-color: #1a1a21;
  width: 600px;
  display: flex;
  flex-direction: column;
  min-height: 740px;
  max-height: 740px;
  //position: relative;
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