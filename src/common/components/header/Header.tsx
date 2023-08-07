import React from 'react';
import styled from "styled-components";


export const Header = () => {
    return (
        <HeaderWrapper>
            <div>Social</div>
            <div>by Dimych</div>
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
`