import React, {useState} from 'react';
import styled from "styled-components";
import avatar from '../../../assets/1676295972138872283.png'
import {initialProfileStateType, postType} from "../../../../redux/profile-reducer";


type MyPostPropsType = {
    profile: initialProfileStateType
}
type PostPropsType={
    title:string
}

export const MyPosts = (props:MyPostPropsType) => {

    const postList = props.profile.posts.map((el:postType) => <Post key={el.id} title={el.data}/>)

    return (
        <Posts>
            {postList}
         </Posts>
    );
};

const Post = (props: PostPropsType) => {
    return (
        <>
            <PostStyled>
                <AvatarAndTimeWrapper>
                    <PostAvatar/>
                    <TimePost>
                        12.07.23
                    </TimePost>
                </AvatarAndTimeWrapper>
                <PostTitle>
                    {props.title}
                </PostTitle>
            </PostStyled>
        </>
    )
}

//=========================MYPOSTS=================================

const Posts = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 10px;
  justify-content: center;
`

//=========================POST====================================

const PostStyled = styled.div`
  min-width: 350px;
  width: max-content;
  min-height: 100px;
  //height: max-content;
  background-color: #1a1a21;
  box-shadow: 0 0 7px rgba(47, 46, 46, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  align-items: center;
  overflow-wrap: anywhere;
`

const AvatarAndTimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TimePost = styled.div`
  color: rgba(255, 255, 255, 0.49);
  font-size: 10px;
  margin-top: 4px;
`

const PostAvatar = styled.div`
  background-image: url(${avatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-inline: 10px;
  flex-shrink: 0;
`

const PostTitle = styled.div`
  color: white;
  margin-inline: 10px;
`

//=========================/////===================================