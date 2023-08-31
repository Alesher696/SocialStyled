import React, {useState} from 'react';
import styled from "styled-components";

import {initialProfileStateType, postType} from "../../../../redux/profile-reducer";
import {DeleteOutlined, EditOutlined, LikeOutlined} from "@ant-design/icons";


type MyPostPropsType = {
    profile: initialProfileStateType
}
type PostPropsType = {
    title: string
    name: string | null
    avatar: string | null
}

export const MyPosts = (props: MyPostPropsType) => {

    const postList = props.profile.posts.map((el: postType) => <Post key={el.id}
                                                                     title={el.data}
                                                                     name={props.profile.profileInfo?.fullName!}
                                                                     avatar={props.profile.profileInfo?.photos.small!}
    />)

    return (
        <Posts>
            {postList}
        </Posts>
    );
};

const Post = (props: PostPropsType) => {

    return (
        <PostStyled>
            <PostWrappper>
                <AvatarAndTimeWrapper>
                    <PostAvatar avatar={props.avatar!}>

                    </PostAvatar>
                    <TimePost>
                        12.07.23
                    </TimePost>
                </AvatarAndTimeWrapper>
                <TextWrapper>
                    <UserName>
                        {props.name}
                    </UserName>
                    <PostTitle>
                        {props.title}
                    </PostTitle>
                </TextWrapper>
            </PostWrappper>

            <IconsWrapper>
                <Icons><DeleteOutlined rev/></Icons>
                <Icons><EditOutlined rev/></Icons>
                <Icons><LikeOutlined rev/></Icons>
            </IconsWrapper>
        </PostStyled>
    )
}

//=========================MYPOSTS=================================

const Posts = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #1a1a21;
  border-radius: 20px;

`

//=========================POST====================================

const PostStyled = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: #1a1a21;
  box-shadow: 0 0 7px rgba(24, 24, 24, 0.26);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow-wrap: anywhere;
  border-bottom: 1px solid rgba(17, 17, 17, 0.89);
`

const PostWrappper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.div`
position: relative;
  bottom: 10px;
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

const PostAvatar = styled.div<{avatar:string}>`
  background-image: url(${props=> props.avatar ? props.avatar : ''});
  background-color: ${props=> !props.avatar ? 'gray': ''};
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
  font-size: 12px;
`
const UserName = styled.div`
  margin-inline: 10px;
  color: white;
`

const IconsWrapper = styled.div`
  position: relative;
  top: 50px;
  display: flex;
  gap: 5px;
  margin-right: 10px;
`
const Icons = styled.div`
  color: rgba(255, 255, 255, 0.49);
`
//=========================/////===================================