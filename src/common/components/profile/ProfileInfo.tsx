import React from 'react';
import styled from "styled-components";
import {GithubOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {contactsType} from "../../../redux/profile-reducer";

type propsType = {
    aboutMe: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    contacts: contactsType
}

export const ProfileInfo = (props: propsType) => {
    const {aboutMe, lookingForAJob, lookingForAJobDescription,contacts} = props
    return (
        <ProfileInfoWrapper>
            <AboutMeWrapper>
                About Me:
                <div>{aboutMe}</div>
                <div>{lookingForAJob ? 'ищу!': 'не ищу!'}</div>
                <div>{lookingForAJobDescription}</div>
            </AboutMeWrapper>
            <BorderDivWrapper>
                Contacts:
                <NavLink to={'#'}><IconContacts><GithubOutlined rev style={{fontSize: '30px', color: '#000000'}}/></IconContacts></NavLink>
                 <NavLink to={'#'}><IconContacts><YoutubeOutlined rev style={{fontSize: '30px', color: '#000000'}}/></IconContacts></NavLink>
                 <NavLink to={'#'}><IconContacts><InstagramOutlined rev style={{fontSize: '30px', color: '#000000'}}/></IconContacts></NavLink>
                <NavLink to={'#'}><IconContacts><TwitterOutlined rev style={{fontSize: '30px', color: '#000000'}}/></IconContacts></NavLink>
                <NavLink to={'#'}><IconContacts><GithubOutlined rev style={{fontSize: '30px', color: '#000000'}}/></IconContacts></NavLink>
                 <NavLink to={'#'}><IconContacts><GithubOutlined rev style={{fontSize: '30px', color: '#000000'}}/></IconContacts></NavLink>
                 <NavLink to={'#'}><IconContacts><GithubOutlined rev style={{fontSize: '30px', color: '#000000'}}/></IconContacts></NavLink>
                 <NavLink to={'#'}><IconContacts><GithubOutlined rev style={{fontSize: '30px', color: '#000000'}}/></IconContacts></NavLink>
            </BorderDivWrapper>
        </ProfileInfoWrapper>
    );
};

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 820px;
  gap: 20px;
`

const AboutMeWrapper = styled.div`
  font-size: 14px;
  flex-flow: wrap;
  width: 400px;
  border: 1px solid #464646;
  border-radius: 15px;
  padding: 10px 0 10px 0;
  margin-top: 5px;
  color: white;
  display: flex;
  padding-inline: 10px;
  gap: 10px;
  flex-direction: column;
`

const BorderDivWrapper = styled.div`
  font-size: 14px;
  flex-flow: wrap;
  width: 400px;
  border: 1px solid #464646;
  border-radius: 15px;
  padding: 10px 0 10px 0;
  margin-top: 5px;
  color: white;
  display: flex;
  padding-inline: 10px;
  gap: 10px;
  height: max-content;
`
const IconContacts = styled.div`
  width: 29px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333; /* Добавьте фоновый цвет по вашему выбору */
  border-radius: 100%; /* Добавьте закругление, чтобы сделать круглую иконку */

`
