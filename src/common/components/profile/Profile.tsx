import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import theme from '../../assets/1681961897_kartinki-pibig-info-p-nasishchennaya-kartinka-arti-krasivo-1.jpg'
import avatar from '../../assets/1676295972138872283.png'
import {MyPosts} from "../../../common/components/profile/myPosts/MyPosts";


export const Profile = () => {

//start is here

    // const [newPost, setNewPost] = useState('')
    // const [posts, setPost] = useState<string[]>(['1', '2', '3', '4', '5', '6'])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setNewPost(e.currentTarget.value)
    }

    const addPost = () => {
        // setPost([...posts, newPost])
        // setNewPost('')
    }

    return (
        <ProfileWrapper>
            <ProfileTheme/>
            <ProfileInfo>
                <ProfileNameStatusWrapper>
                    <ProfileName>
                        Vas'ka Borisovich
                    </ProfileName>
                    <ProfileStatus>
                        Извини, уважаемая, мне нужно заниматься моими кошачьими делами, так что не тревожь меня.
                    </ProfileStatus>
                </ProfileNameStatusWrapper>
                <ProfileAvatar/>
            </ProfileInfo>
            {/*<News/>*/}
            <PostAddWrapper>
                <AddPostButton onClick={addPost}> Add post </AddPostButton>
                <PostAreaInput onChange={onChangeHandler} placeholder={"What's News?"}/>
            </PostAddWrapper>
            <MyPosts/>
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.div`
  background-color: #2e2f3a;
  display: flex;
  height: max-content;
  min-height: 100vh;
  width: 800px;
  margin: 0 auto;
  //border: 1px solid black;
  flex-direction: column;
  padding-bottom: 10px;
`

const ProfileTheme = styled.div`
  background-image: url(${theme});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 1000px;
  height: 150px;
  margin-left: -100px; //отрицательное смещение
  margin-right: -100px;
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ProfileAvatar = styled.div`
  background-image: url(${avatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 220px;
  height: 250px;
  margin-top: -20px;
`

const ProfileNameStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  max-width: 550px;
`

//=========================ADDPOST===================================

const PostAddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 570px;
  margin-top: -65px;
`

const AddPostButton = styled.button`
  height: 30px;
  background-color: #3D50FA;
  border: none;
  outline: none;
  -webkit-box-shadow: 0px 1px 19px 4px #3D50FA;
  -moz-box-shadow: 0px 1px 19px 4px #3D50FA;
  box-shadow: 0px 1px 19px 4px #3D50FA;
  border-radius: 7px;
  width: 150px;
  color: white;
  cursor: pointer;
  margin-bottom: 5px;
  //transition: all 500ms ease;
  //position: relative;
`

const PostAreaInput = styled.input`
  all: unset;
  text-align: center;
  width: 570px;
  height: 30px;
  padding: 12px 20px;
  box-sizing: border-box;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background-color: rgba(89, 89, 108, 0.47);
  font-size: 16px;
  resize: none;
  outline: none;
  color: #ffffff;
  overflow: auto;

  &::placeholder {
    color: rgba(170, 170, 196, 0.47);
  }
`

//=========================/////===================================


