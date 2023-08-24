import React from 'react';
import iconFB from '../contactsIcons/fb.png'
import styled from "styled-components";

export const FacebookOutlined = () => {
    return (
        <IconWrapper src={iconFB}/>
    );
};

const IconWrapper = styled.img`
  width: 30px;
  height: 30px;
  background-position: center;
  border-radius: 100%;
`