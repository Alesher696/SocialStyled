import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {AddPostButton} from "../../components/profile/Profile";


export const AddMessage = () => {

    const [addMes,setMes]= useState('')

    const addMessageOnChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setMes(e.currentTarget.value)
    }

    return (
        <AddMessageWrapper>
            <AddMessageInput placeholder={'Write a message...'} onChange={addMessageOnChange}/>
            <AddPostButton onClick={()=>{}} condition={!!addMes} disabled={!!addMes}> Send </AddPostButton>
        </AddMessageWrapper>

    );
};

const AddMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #09090c;
`

const AddMessageInput = styled.input`
  all: unset;
  background-color: #09090c;
  color: white;
  height: 2.5em;
  width: 50%;
  margin-bottom: 1px;
  margin-inline: 100px;
  padding-left: 5px;
  
`
