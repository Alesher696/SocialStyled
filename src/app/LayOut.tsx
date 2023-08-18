import React from 'react';
import {Header} from "../common/components/header/Header";
import {NavBar} from "../common/components/navBar/NavBar";
import {Footer} from "../common/components/footer/Footer";
import styled from "styled-components";
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {AddMessage} from "../common/components/dialogs/AddMessage";
import {useSelector} from "react-redux";
import {storeType} from "../redux/store";

export const LayOut = () => {

    const dialogs = useSelector((state: storeType) => state.dialogs)
    const location = useLocation()
    const isInitLocation = location.pathname === '/'
    const isDialogsLocation = location.pathname === '/dialogs' ||  location.pathname === `/dialogs/${dialogs.activeUserId}/messages`
    //при логинизации не катит//
    console.log(dialogs.activeUserId)
    return (
        <AppWrapper>
            <Header/>
            <ContentWrapper>
                <NavBarWrapper>
                    <NavBar/>
                </NavBarWrapper>
                {/*{isInitLocation && <Navigate to={'profile'}/>}*/}
                <Outlet/>
                {/*<News/>*/}
            </ContentWrapper>
            {isDialogsLocation && <AddMessage/>}
            <Footer/>
        </AppWrapper>
    );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1; /* Занимает доступное пространство, меняется в зависимости от высоты Outlet */
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

const NavBarWrapper = styled.div`
  flex: 0 0 auto; /* Не изменяется по высоте, занимает только необходимое пространство */

`;