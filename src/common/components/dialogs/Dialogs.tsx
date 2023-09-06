import React, {useEffect} from 'react';
import styled from "styled-components";
import {getDialogsTC} from "redux/dialogs-reducer";
import {UsersDialogs} from "./dialogs_components/UsersDialogs";
import {MessagesUsers} from "./dialogs_components/MessagesUsers";
import {useAppDispatch} from "common/hooks/selectors";



export const Dialogs = () => {

    console.log('dialogs is rendered ')

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDialogsTC())
    }, [])

    return (
        <DialogsWrapper>
            <MessagesUsers/>
            <UsersWrapper>
                <UsersDialogs/>
            </UsersWrapper>
        </DialogsWrapper>
    );
};

const DialogsWrapper = styled.div`
  color: white;
  font-size: 24px;
  margin: 3em auto;
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
  border-radius: 6px 6px 6px 6px;
  border: 1px solid #464646;
`

//====================================================================



