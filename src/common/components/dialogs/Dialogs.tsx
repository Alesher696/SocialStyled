import React, {useEffect} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../redux/store";
import {getDialogsTC} from "../../../redux/dialogs-reducer";
import {UsersDialogs} from "./dialogs_components/UsersDialogs";
import {MessagesUsers} from "./dialogs_components/MessagesUsers";


export const Dialogs = () => {

    const dialogs = useSelector((state: storeType) => state.dialogs)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDialogsTC())
    }, [])

    return (
        <DialogsWrapper>
            <MessagesUsers dialogs={dialogs}/>
            <UsersWrapper>
                <UsersDialogs dialogs={dialogs}/>
            </UsersWrapper>
        </DialogsWrapper>
    );
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
  border-radius: 6px 6px 6px 6px;
  border: 1px solid #464646;
`

//====================================================================



