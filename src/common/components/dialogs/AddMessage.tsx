import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import send from '../../assets/send (1).png'
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../../redux/store";
import {addNewMessageAC} from "../../../redux/dialogs-reducer";
import { StyleSheetManager } from 'styled-components';


type addBtnPropsType = {
    condition: boolean
}

export const AddMessage = () => {

    // const [addMes, setMes] = useState('')
    const dialogs = useSelector((state: storeType) => state.dialogs)
    const dispatch = useDispatch()

    const addNewMessageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addNewMessageAC(e.currentTarget.value))
    }

    const onClickAddMessage = () => {
        dispatch(addNewMessageAC(''))
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
                             value={dialogs.newMessage}
                             onKeyDown={onEnterAddMessage}
            />
            <AddBtnInnerWrapper condition={!!dialogs.newMessage}
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
  background-color: #09090c;
`

const AddMessageInput = styled.input`
  all: unset;
  background-color: #09090c;
  color: white;
  height: 2.5em;
  width: 80%;
  margin-bottom: 1px;
  margin-inline: 100px;
  padding-left: 5px;
`

const AddBtnInnerWrapper = styled.div<addBtnPropsType>`
  cursor: pointer;
  margin-right: 2px;
  background-color: #3D50FA;
  width: 40px;
  height: 40px;
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
  transition: opacity 0.2s ease, visibility 0.2s ease;
  //==============================================================
`

const IconAddBtnWrapper = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  z-index: 2;
`