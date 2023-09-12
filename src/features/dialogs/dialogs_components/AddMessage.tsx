import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import send from 'common/assets/send (1).png'
import {sendMessageTC} from "features/dialogs/dialogs-reducer";
import {StyleSheetManager} from 'styled-components';
import {useAppDispatch, useAppSelector} from "common/hooks/selectors";
import {selectActiveUserId} from "features/dialogs/dialogs-selectors";


type addBtnPropsType = {
    condition: boolean
}

export const AddMessage = () => {

    console.log('AddMessage is render')

    const [newMessage, setNewMessage] = useState('')
    const userIdIsActive = useAppSelector(selectActiveUserId)
    const dispatch = useAppDispatch()

    const addNewMessageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
       setNewMessage(e.currentTarget.value)
    }

    const onClickAddMessage = () => {
        // dispatch(addNewMessageAC(newMessage))
        dispatch(sendMessageTC(userIdIsActive!, newMessage))
        setNewMessage('')
    }

    const onEnterAddMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddMessage()
        }
    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'condition'}>
            <AddMessageWrapper>
                <AddMessageInput placeholder={'Write a message...'}
                                 onChange={addNewMessageOnChange}
                                 value={newMessage}
                                 onKeyDown={onEnterAddMessage}
                />
                <AddBtnInnerWrapper condition={!!newMessage}
                                    onClick={onClickAddMessage}>
                    <IconAddBtnWrapper src={send}/>
                </AddBtnInnerWrapper>
            </AddMessageWrapper>
        </StyleSheetManager>

    );
};

const AddMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #121218;
  border-radius: 0 0 10px 10px;
`

const AddMessageInput = styled.input`
  all: unset;
  background-color: #121218;
  color: white;
  height: 40px;
  width: 80%;
  margin-bottom: 1px;
  margin-inline: 20px;
  padding-left: 5px;
  font-size: 15px;
`

const AddBtnInnerWrapper = styled.div<addBtnPropsType>`
  margin-right: 5px;
  cursor: pointer;
  //margin-right: 2px;
  background-color: #3D50FA;
  width: 30px;
  height: 30px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  -webkit-box-shadow: 0 1px 19px 4px #3D50FA;
  -moz-box-shadow: 0 1px 19px 4px #3D50FA;
  box-shadow: 0 1px 10px 4px #3D50FA;
  //==============================================================
  opacity: ${props => props.condition ? '1' : '0'};
  visibility: ${props => props.condition ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.2s ease;
  //==============================================================
`

const IconAddBtnWrapper = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  z-index: 2;
`