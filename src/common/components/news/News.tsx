import React, {useState} from 'react';
import styled from "styled-components";


export const News = () => {

    return (
        <NewsWrapper>
           <New/>
           <New/>
           <New/>
           <New/>
        </NewsWrapper>
    );
};

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`

const New = styled.div`
  min-width: 300px;
  width: max-content;
  min-height: 100px;
  height: max-content;
  background-color: rgba(89, 89, 108, 0.47);
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
`