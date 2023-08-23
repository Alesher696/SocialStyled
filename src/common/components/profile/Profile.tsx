import React, {ChangeEvent, useEffect} from 'react';
import styled, {StyleSheetManager} from "styled-components";
import theme from '../../assets/1681961897_kartinki-pibig-info-p-nasishchennaya-kartinka-arti-krasivo-1.jpg'
import avatar from '../../assets/1676295972138872283.png'
import {MyPosts} from "../../../common/components/profile/myPosts/MyPosts";
import {ProfilePropsType} from "../profile/ProfileContainer";
import {PhotoUploadModal} from "../../../common/components/profile/modal window/UploadModal";


type addBtnConditionProps = {
    condition: boolean
}

export const Profile = (props: ProfilePropsType) => {

//start is here

    console.log('profile is rendered ')

    useEffect(() => {
        props.getUserProfileTC(props.auth.id!)
        props.getUserStatusTC(props.auth.id!)
    }, [])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewPostTextAC(e.currentTarget.value)
    }
    // console.log(props.profile)
    const addPost = () => {
        props.addPostAC()
        props.setNewPostTextAC('')

    }

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'condition'}>
            <ProfileWrapper>
                <div>
                    <ProfileTheme/>
                    <ProfileNameStatusWrapper>
                        <UnderThemeWrapper>
                            <ProfileName>
                                {props.profile.profileInfo?.fullName}
                            </ProfileName>
                            <ProfileStatus>
                                {props.profile.status}
                            </ProfileStatus>
                            <ProfileAvatar/>
                        </UnderThemeWrapper>

                    </ProfileNameStatusWrapper>
                </div>
                <ProfileInfo>
                    info
                </ProfileInfo>
                <div>
                    <PostAddWrapper>
                        <AddPostButton onClick={addPost}
                                       condition={!!props.profile.newPostText}
                                       disabled={!props.profile.newPostText}> img </AddPostButton>
                        <PostAreaInput onChange={onChangeHandler}
                                       placeholder={"What's News?"}
                                       value={props.profile.newPostText}/>
                    </PostAddWrapper>
                </div>
                <MyPostsWrapper>
                    <MyPosts profile={props.profile}/>
                </MyPostsWrapper>
            </ProfileWrapper>
        </StyleSheetManager>
    );
};

const UnderThemeWrapper = styled.div`
  
`

const ProfileWrapper = styled.div`
  background-color: #1a1a21;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 10px;
`

const ProfileTheme = styled.div`
  background-image: url(${theme});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //width: 800px;
  height: 150px;
  //margin-left: -100px; //отрицательное смещение
  //margin-right: -100px;
  border-radius: 15px 15px 0 0;
`

const ProfileAvatar = styled.div`
  position: relative;
  left: 640px;
  bottom: 90px;
  background-image: url(${avatar});
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
  height: 120px;
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

const ProfileInfo = styled.div`
  margin-top: 5px;
  color: white;
  font-size: 14px;
  flex-flow: wrap;
  max-width: 820px;
  border: 1px solid #464646;
  border-radius: 15px;
  padding: 10px 0 10px 0;
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
  background-color: #1B1F261E;
  border: 1px solid #464646;
  border-radius: 15px;
  padding: 10px;
`

export const AddPostButton = styled.button<addBtnConditionProps>`
  height: 30px;
  background-color: ${props => props.condition ? '#3D50FA' : 'rgba(61, 80, 250, 0.6)'};
  border: none;
  outline: none;
  border-radius: 7px;
  width: 50px;
  color: ${props => props.condition ? 'white' : 'grey'};
  cursor: ${props => props.condition ? 'pointer' : 'default'};
  z-index: 2;
  -webkit-box-shadow: ${props => props.condition ? '0px 1px 19px 4px #3D50FA' : 'none'};
  -moz-box-shadow: ${props => props.condition ? '0px 1px 19px 4px #3D50FA' : 'none'};
  box-shadow: ${props => props.condition ? '0px 1px 19px 4px #3D50FA' : 'none'};
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


