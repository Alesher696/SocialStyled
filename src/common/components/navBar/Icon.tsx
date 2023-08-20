import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";


type PropsType = {
    image: string
    color: string
    path: string
}

type PropsColorType={
    color: string
}

export const Icon = (props: PropsType) => {
    return (
        <IconContainer>
            <BackgroundTop>.</BackgroundTop>
            <ForIconBackGround>
                <NavLink to={props.path}>
                <IconInnerWrapper color={props.color}>
                        <IconWrapper src={props.image}/>
                </IconInnerWrapper>
                </NavLink>
            </ForIconBackGround>
            <BackgroundBottom>.</BackgroundBottom>
            <BackGroundBodyGrey/>
        </IconContainer>
    );
};

const IconContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 3;
  right: 10px;
`

const IconInnerWrapper = styled.div<PropsColorType>`
  background-color: #3D50FA;
  position: relative;
  left: 5px;
  width: 35px;
  height: 35px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  -webkit-box-shadow: 0 1px 19px 4px #3D50FA;
  -moz-box-shadow: 0 1px 19px 4px #3D50FA;
  box-shadow: 0 1px 10px 4px #3D50FA;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    box-shadow: 0px 1px 10px 4px ${props => props.color};
    background-color: ${props=> props.color};
  }
`

const BackgroundTop = styled.div`
  background-color: #09090c;
  //background-color: #3dc2bd;
  width: 45px;
  position: relative;
  left: 15px;
  border-radius: 0 0 10px 0;
  color: #09090c;
  z-index: 2;
`

const BackgroundBottom = styled.div`
  background-color: #09090c;
  //background-color: #3dc2bd;
  width: 45px;
  position: relative;
  left: 15px;
  border-radius: 0 10px 0 0;
  color: #09090c;
  z-index: 2;
  margin-right: 5px;
`

const IconWrapper = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  z-index: 2;
`

const ForIconBackGround = styled.div`
  display: flex;
  background-color: #1a1a21;
  //background-color: #c2b3e5;
  width: 40px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  margin-left: 5px;
`

const BackGroundBodyGrey = styled.div`
  background-color: #1a1a21;
  //background-color: #9838cf;
  width: 35px;
  height: 70px;
  z-index: 1;
  position: absolute;
  top: 12px;
  left: 25px;
`