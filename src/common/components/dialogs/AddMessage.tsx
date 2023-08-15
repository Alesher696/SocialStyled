import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {AddPostButton} from "../../components/profile/Profile";
import send from '../../assets/send (1).png'

type addBtnPropsType = {
    condition: boolean
}

export const AddMessage = () => {

    const [addMes, setMes] = useState('')

    const addMessageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMes(e.currentTarget.value)
    }

    return (
        <AddMessageWrapper>
            <AddMessageInput placeholder={'Write a message...'} onChange={addMessageOnChange}/>
            <AddBtnInnerWrapper condition={!!addMes}>
                <IconAddBtnWrapper src={send}/>
            </AddBtnInnerWrapper>
        </AddMessageWrapper>

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
  transition: opacity 0.2s ease, visibility 0.2s ease ;
  
  //==============================================================
`

const IconAddBtnWrapper = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  z-index: 2;
`