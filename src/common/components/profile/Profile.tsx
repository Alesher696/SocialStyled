import React, {ChangeEvent} from 'react';
import styled, {StyleSheetManager} from "styled-components";
import theme from '../../assets/1681961897_kartinki-pibig-info-p-nasishchennaya-kartinka-arti-krasivo-1.jpg'
import avatar from '../../assets/1676295972138872283.png'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfilePropsType} from "../profile/ProfileContainer";
import {SetThemeBtn} from "./drop down btn/SetThemeBtn";
import {EditableStatus} from "./editable status/EditableStatus";
import {SetDataModalBtn} from "./modal window/SetDataModalBtn";
import {SetUserInfoModalBtn} from "./modal window/SetUserInfoModalBtn";
import {SendOutlined} from "@ant-design/icons";
import {ProfileInfo} from "./ProfileInfo";


type addBtnConditionProps = {
    condition: string
}

export const Profile = (props: ProfilePropsType) => {

    console.log('profile is rendered ')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewPostTextAC(e.currentTarget.value)
    }

    const addPost = () => {
        props.addPostAC()
        props.setNewPostTextAC('')
    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'condition'}>
            <ProfileWrapper>
                <ProfileInnerWrapper>
                    <ProfileTheme>
                        <SetThemeBtn/>
                    </ProfileTheme>
                    <ProfileNameStatusWrapper>
                        <div>
                            <ProfileName>
                                {props.profile.profileInfo?.fullName}
                            </ProfileName>
                            <ProfileStatus>
                                <EditableStatus status={props.profile.status}/>
                                <ModalBtnWrapper>
                                    <SetDataModalBtn/>
                                    <SetUserInfoModalBtn/>
                                </ModalBtnWrapper>
                            </ProfileStatus>
                            <ProfileAvatar avatar={props.profile.profileInfo?.photos.large!}/>
                        </div>
                    </ProfileNameStatusWrapper>
                </ProfileInnerWrapper>
                <ProfileInfo contacts={props.profile.profileInfo?.contacts!}
                             aboutMe={props.profile.profileInfo?.aboutMe!}
                             lookingForAJob={props.profile.profileInfo?.lookingForAJob!}
                             lookingForAJobDescription={props.profile.profileInfo?.lookingForAJobDescription!}
                />
                <>
                    <PostAddWrapper>
                        <AddPostButton onClick={addPost}
                                       condition={(!!props.profile.newPostText).toString()}
                                       disabled={!props.profile.newPostText}> <SendOutlined color={'white'} rev={''}/>
                        </AddPostButton>
                        <PostAreaInput onChange={onChangeHandler}
                                       placeholder={"What's News?"}
                                       value={props.profile.newPostText}/>
                    </PostAddWrapper>
                </>
                <MyPostsWrapper>
                    <MyPosts profile={props.profile}/>
                </MyPostsWrapper>
            </ProfileWrapper>
        </StyleSheetManager>
    );
};


const ProfileWrapper = styled.div`
  background-color: #121217;
  display: flex;
  margin: 3em auto;
  flex-direction: column;
  gap: 10px;
`

const ProfileInnerWrapper = styled.div`
  //background-color: #1a1a21;
`

const ProfileTheme = styled.div`
  background-image: url(${theme});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 821px;
  height: 150px;
  //margin-left: -100px; //отрицательное смещение
  //margin-right: -100px;
  border-radius: 15px 15px 0 0;
  display: flex;
  flex-direction: row-reverse;
`

const ProfileAvatar = styled.div<{ avatar: string | null }>`
  position: relative;
  left: 640px;
  bottom: 160px;
  background-image: url(${props => props.avatar ? props.avatar : avatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 100%;
`

const ProfileNameStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #464646;
  border-radius: 0 0 15px 15px;
  padding: 10px;
  background-color: rgba(27, 31, 38, 0.12);
  height: 100px;
`

const ProfileName = styled.div`
  color: white;
  font-size: 20px;
`

const ProfileStatus = styled.div`
  margin-top: 5px;
  color: white;
  font-size: 14px;
  flex-flow: wrap;
  max-width: 800px;
`


const MyPostsWrapper = styled.div`
  width: 820px;
  max-width: 820px;
  background-color: #1a1a21;
  padding: 10px 0 10px 0;
  border-radius: 15px;
  border: 1px solid #464646;
  
`

//=========================ADDPOST===================================

const PostAddWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 800px;
  background-color: #1a1a21;
  border: 1px solid #464646;
  border-radius: 15px;
  padding: 10px;
`

export const AddPostButton = styled.button<addBtnConditionProps>`
  height: 30px;
  background-color: ${props => props.condition === 'true' ? '#3D50FA' : 'rgba(61, 80, 250, 0.6)'};
  border: none;
  outline: none;
  border-radius: 7px;
  width: 30px;
  color: ${props => props.condition === 'true' ? 'white' : 'grey'};
  cursor: ${props => props.condition === 'true' ? 'pointer' : 'default'};
  z-index: 2;
  -webkit-box-shadow: ${props => props.condition === 'true'? '0px 1px 19px 4px #3D50FA' : 'none'};
  -moz-box-shadow: ${props => props.condition === 'true' ? '0px 1px 19px 4px #3D50FA' : 'none'};
  box-shadow: ${props => props.condition === 'true' ? '0px 1px 19px 4px #3D50FA' : 'none'};
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
`

const PostAreaInput = styled.input`
  all: unset;
  text-align: center;
  width: 700px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #1a1a21;
  font-size: 16px;
  resize: none;
  outline: none;
  color: #ffffff;
  overflow: auto;

  &::placeholder {
    color: rgba(127, 127, 145, 0.47);
  }
`

//=========================/////===================================


const ModalBtnWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: row;
  gap: 10px;
`