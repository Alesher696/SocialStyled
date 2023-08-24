import React from 'react';
import styled from "styled-components";
import {GithubOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {contactsType} from "../../../redux/profile-reducer";
import {FacebookOutlined} from "../../../common/assets/contactsIcons/FacebookOutlined";
import {VkOutlined} from "../../../common/assets/contactsIcons/VkOutlined";
import {MainlinkOutlined} from "../../../common/assets/contactsIcons/MainlinkOutlined";
import {WebsiteOutlined} from "../../../common/assets/contactsIcons/WebsiteOutlined";
import {useSelector} from "react-redux";
import {storeType} from "../../../redux/store";
import {Loader} from "../loader/Loader";

type propsType = {
    aboutMe: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    contacts: contactsType
}

export const ProfileInfo = (props: propsType) => {

    const {aboutMe, lookingForAJob, lookingForAJobDescription, contacts} = props

    const profile = useSelector((state: storeType) => state.profile)


    const icons = [
        {
            icon: <GithubOutlined rev style={{fontSize: '31px', color: '#000000', backgroundPosition: 'center'}}/>,
            link: contacts && contacts.github ? contacts.github : '#',
            color: contacts ? 'white' : '#333'
        },
        {
            icon: <YoutubeOutlined rev style={{
                fontSize: '20px',
                color: contacts && contacts.youtube ? '#c90c0c' : '#333'
            }}/>,
            link: contacts && contacts.youtube ? contacts.youtube : '#',
            color: 'black'
        },
        {
            icon: <TwitterOutlined rev style={{
                fontSize: '20px',
                color: contacts && contacts.twitter ? '#3F48CC' : '#333'
            }}/>,
            link: contacts && contacts.twitter ? contacts.twitter : '#',
            color: 'black'
        },
        {
            icon: <InstagramOutlined rev style={{
                fontSize: '20px',
                color: contacts && contacts.instagram ? '#3F48CC' : '#333'
            }}/>, link: contacts && contacts.instagram ? contacts.instagram : '#', color: 'black'
        },
        {
            icon: <FacebookOutlined/>,
            link: contacts && contacts.facebook ? contacts.facebook : '#',
            color: contacts && contacts.facebook ? '#3F48CC' : '#333'
        },
        {
            icon: <VkOutlined/>,
            link: contacts && contacts.vk ? contacts.vk : '#',
            color: contacts && contacts.vk ? '#437af1' : '#333'
        },
        {
            icon: <MainlinkOutlined/>,
            link: contacts && contacts.mainLink ? contacts.mainLink : '#',
            color: contacts && contacts.mainLink ? '#437af1' : '#333'
        },
        {
            icon: <WebsiteOutlined/>,
            link: contacts && contacts.website ? contacts.website : '#',
            color: contacts && contacts.website ? '#437af1' : '#333'
        },
    ]

    const iconsList = icons.map(el =>
        <NavLink to={el.link} target={"_blank"}>
            <IconContacts color={el.color}>
                {el.icon}
            </IconContacts>
        </NavLink>)

    if (!profile.profileInfo) {
        return <Loader/>;
    }

    return (
        <ProfileInfoWrapper>
            <AboutMeWrapper>
                About Me:
                <div>{aboutMe}</div>
                <div>{lookingForAJob ? 'ищу!' : 'не ищу!'}</div>
                <div>{lookingForAJobDescription}</div>
            </AboutMeWrapper>
            <BorderDivWrapper>
                <ContactsStyleDiv>
                    Contacts:
                </ContactsStyleDiv>
                {iconsList}
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
const IconContacts = styled.div<{ color: string }>`
  width: 29px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  border-radius: 100%;
`
const ContactsStyleDiv = styled.div`
  position: relative;
  top: 5px;
`
