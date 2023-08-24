import React, {useEffect} from 'react';
import {Header} from "../common/components/header/Header";
import {NavBar} from "../common/components/navBar/NavBar";
import styled from "styled-components";
import {Navigate, Outlet} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../redux/store";
import {getUserProfileTC} from "../redux/profile-reducer";

export const LayOut = () => {

    // const location = useLocation()
    // const isInitLocation = location.pathname === '/'


    const auth = useSelector((state: storeType) => state.auth)
    const profile = useSelector((state: storeType) => state.profile)
    const dispatch = useDispatch()
    //при логинизации не катит//

    useEffect(() => {
        if (!auth.isLoggedIn) {
            return
        }
        dispatch(getUserProfileTC(auth.id!))
    }, [])

    console.log('layout is rendered ')

    if (!auth.isLoggedIn || !profile) {
        return <Navigate to={'/login'}/>
    }
    return (
        <AppWrapper>
            <Header/>
            <ContentWrapper>
                    <NavBar/>
                <Outlet/>
            </ContentWrapper>
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
