import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {authLogOutTC} from "../../../redux/auth-reducer";


export const Header = () => {

    const dispatch = useDispatch()

    const logOutHandler =()=>{
        dispatch(authLogOutTC())
    }

    return (
        <HeaderWrapper>
            <div>Social</div>
            <div>by Sanyochek</div>
            <button onClick={logOutHandler}>Log Out</button>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
background-color: #09090c;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3em;
  color: white;
  //position: relative;
`