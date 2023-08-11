import React from 'react';
import {Header} from "../common/components/header/Header";
import {NavBar} from "../common/components/navBar/NavBar";
import {Footer} from "../common/components/footer/Footer";
import styled from "styled-components";
import {Navigate, Outlet, useLocation} from 'react-router-dom';

export const LayOut = () => {

    const location = useLocation()
    const isInitLocation = location.pathname === '/'
    //при логинизации не катит//

    return (
        <AppWrapper>
            <Header/>
            <ContentWrapper>
                <NavBar/>
                {/*{isInitLocation && <Navigate to={'profile'}/>}*/}
                <Outlet/>
                {/*<News/>*/}
            </ContentWrapper>
            <Footer/>
        </AppWrapper>
    );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  display: flex;
`