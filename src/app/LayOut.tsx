import React, {memo, Suspense, useEffect} from 'react';
import {Header} from "common/components/header/Header";
import {NavBar} from "features/navBar/NavBar";
import styled from "styled-components";
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {getUserProfileTC} from "features/profile/profile-reducer";
import {Footer} from "common/components/footer/Footer";
import {selectId, selectIsLoggedIn} from "features/login/auth-selectors";
import {useAppDispatch, useAppSelector} from "common/hooks/selectors";
import {Loader} from "common/components/loader/Loader";


export const LayOut = memo(() => {

    console.log('layout is rendered ')

    const authIsLoginIn = useAppSelector(selectIsLoggedIn)
    const authId = useAppSelector(selectId)

    const dispatch = useAppDispatch()

    const location = useLocation()
    const footer = location.pathname === '/SocialStyled/profile'

    useEffect(() => {
        dispatch(getUserProfileTC(authId!))
    }, [])

    if (!authIsLoginIn) {
        return <Navigate to={'/SocialStyled/login'}/>
    }
    return (
        <AppWrapper>
            <Header/>
            <ContentWrapper>
                    <NavBar/>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </ContentWrapper>
            {footer && <Footer/>}
        </AppWrapper>
    );
})


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
