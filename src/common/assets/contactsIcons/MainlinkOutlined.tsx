import React from 'react';
import iconVK from '../contactsIcons/vk.png'
import styled from "styled-components";

export const MainlinkOutlined = () => {
    return (
        <IconWrapper src={iconVK}/>
    );
};

const IconWrapper = styled.img`
  width: 30px;
  height: 30px;
  background-position: center;
  border-radius: 100%;
`