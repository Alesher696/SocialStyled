import React from 'react';
import loader from '../../assets/loaders/ball-triangle.svg'
import styled from "styled-components";


export const Loader = () => {

    return (
        <LoaderWrapper>
            <img src={loader} alt="Loading..."/>
        </LoaderWrapper>
    );
};

const LoaderWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`