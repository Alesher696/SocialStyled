import React, {useState} from 'react';
import styled from "styled-components";
import {Icon} from '../../components/navBar/Icon'
import setting from '../../assets/gear (1).png'
import music from '../../assets/music-player (1).png'
import message from '../../assets/letter (1).png'
import start from '../../assets/play-store (1).png'
import users from '../../assets/multiple-users-silhouette (1).png'


export const NavBar = () => {
    return (
        <NavBarWrapper>
            <WrappedContent/>
        </NavBarWrapper>
    );
};

const NavBarWrapper = styled.div`
  background-color: #09090c;
  color: white;
  position: absolute;
  height: 101vh;
  width: max-content;
  padding: 0 0 0 10px;
`

const WrappedContentIcons = styled.div`
  display: flex;
  flex-direction: column;
`

const WrappedContent = () => {
    return (
        <WrappedContentIcons>
            <Icon image={start} color={'#43cb93'}/>
            <Icon image={message} color={'#9838cf'}/>
            <Icon image={users} color={'#cdd245'}/>
            <Icon image={music} color={'#cf385b'}/>
            <Icon image={setting} color={'#41d5f6'}/>
        </WrappedContentIcons>
    )
}
