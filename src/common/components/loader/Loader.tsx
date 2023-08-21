import React, {useEffect, useState} from 'react';
import loader from '../../assets/loaders/ball-triangle.svg'
import styled from "styled-components";


export const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LoaderWrapper>
            {showLoader && <img src={loader} alt="Loading..."/>}
        </LoaderWrapper>
    );
};

const LoaderWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`