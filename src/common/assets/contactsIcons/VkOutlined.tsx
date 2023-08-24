import React from 'react';
import iconVK from '../contactsIcons/vk.png'
import styled from "styled-components";

export const VkOutlined = () => {
    return (
        <IconWrapper src={iconVK}/>
    );
};

const IconWrapper = styled.img`
  width: 31px;
  height: 31px;
  background-position: center;
  border-radius: 100%;
`