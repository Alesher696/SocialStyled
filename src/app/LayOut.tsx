import React, {useEffect} from 'react';
import {Header} from "common/components/header/Header";
import {NavBar} from "common/components/navBar/NavBar";
import styled from "styled-components";
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "redux/store";
import {getUserProfileTC} from "redux/profile-reducer";
import {Footer} from "common/components/footer/Footer";

export const LayOut = () => {

    console.log('layout is rendered ')

    const auth = useSelector((state: storeType) => state.auth)
    const dispatch = useDispatch()
    const location = useLocation()
    const footer = location.pathname === '/SocialStyled/profile'

    useEffect(() => {
        dispatch(getUserProfileTC(auth.id!))
    }, [])

    if (!auth.isLoggedIn) {
        return <Navigate to={'/SocialStyled/login'}/>
    }
    return (
        <AppWrapper>
            <Header/>
            <ContentWrapper>
                    <NavBar/>
                <Outlet/>
            </ContentWrapper>
            {footer && <Footer/>}
        </AppWrapper>
    );
};

const AppWrapper = styled.div`
  flex-direction: column;
  overflow: auto;
`

const ContentWrapper = styled.div`
  display: flex;
  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #494957;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #2e2f3a;
    border-radius: 5px;
  }
  
`
