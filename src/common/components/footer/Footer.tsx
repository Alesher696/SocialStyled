import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {authLogOutTC} from "../../../redux/auth-reducer";


export const Footer = () => {

    const dispatch = useDispatch()

    const logOutHandler =()=>{
        dispatch(authLogOutTC())
    }

    return (
        <FooterWrapper>
            <LinksWrapper >
                <div>Home</div>
                <div>Features</div>
                <div>Pricing</div>
                <div>FAQs</div>
                <div>About</div>
            </LinksWrapper>
            <Border></Border>
            <div>
                <Span>© 2023 Company, Inc</Span>
            </div>
            <button onClick={logOutHandler}>Log Out</button>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.div`
    color: white;
    background: #09090c;
    grid-area: footer;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
  `

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  cursor: pointer;
`

const Border = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.73);
  width: 50%;
  margin: 20px;
`

const Span = styled.span`
    cursor: default;
`