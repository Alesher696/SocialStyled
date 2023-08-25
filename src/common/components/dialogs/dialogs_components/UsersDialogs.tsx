import React from 'react';
import {NavLink} from "react-router-dom";
import {getMessagesListTC, initialStateType, setActiveUserIdAC} from "../../../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";
import styled from "styled-components";


type UsersDialogsProps = {
    dialogs: initialStateType
}

export const UsersDialogs = (props: UsersDialogsProps) => {

    const dispatch = useDispatch()

    console.log('dialogs is rendered ')

    const userOnClickHandler = (userId: number) => {
        dispatch(setActiveUserIdAC(userId))
        dispatch(getMessagesListTC(userId))
    }

    const userList = props.dialogs.all_dialogs?.map((el) =>

        <User key={el.id} onClick={() => userOnClickHandler(el.id)}>{el.userName}
            <NavLink to={`/dialogs/${el.id}/messages`}>
            </NavLink>
        </User>
    )
    return (
        <>
            {userList}
        </>
    );
};

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