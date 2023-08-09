import React from 'react';
import styled, {css} from 'styled-components'
import {Profile} from '../common/components/profile/Profile'
import {Header} from "../common/components/header/Header";
import {Footer} from "../common/components/footer/Footer";
import {NavBar} from "../common/components/navBar/NavBar";
import {News} from "../common/components/news/News";


export function App() {

    return (
        <AppWrapper>
            <Header/>
            <ContentWrapper>
                <NavBar/>
                <Profile/>
                {/*<News/>*/}
            </ContentWrapper>
            <Footer/>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  display: flex;
`












//=========================/////===================================

{/*<Button>button</Button>*/
}
{/*<Button $primary> primary button</Button>*/
}
{/*  <Link> link </Link>*/
}

const Link = styled.a`
  color: purple;
  background-color: black;
`

const Button = styled.button<{ $primary?: boolean; }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.$primary && css`
    background: #BF4F74;
    color: white;
  `}
  &:hover ${Link} {
    background-color: aquamarine;
  }

  &:hover {
    background-color: #15ad96;
  }
`
//=========================/////===================================
