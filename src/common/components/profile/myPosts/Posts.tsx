import React, {useState} from 'react';
import styled from "styled-components";
import avatar from '../../../assets/1676295972138872283.png'


type PropsType ={
    posts: string[]
}

type PostPropsType ={
    title: string
}

export const Posts = (props: PropsType) => {

    // const postList = props.posts.map((el: string, index: any) => (<Post title={el} key={index}/>))
    // const postList = props.posts.map((el: string) => { return <Post title={el}/> })

const postList = props.posts.map( el => <Post title={el}/>)

    return (
        <MyPosts>
            {postList}
        </MyPosts>
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
            <Triangle/>
        </>
    )
}

//=========================MYPOSTS=================================

const MyPosts = styled.div`
  display: flex;
  margin-top: 40px;
  margin-inline: 10px;
  flex-flow: wrap;
  gap: 20px;
  justify-content: center;
`

//=========================POST====================================

const PostStyled = styled.div`
  min-width: 300px;
  width: max-content;
  min-height: 100px;
  height: max-content;
  background-color: rgba(89, 89, 108, 0.47);
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
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

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid rgb(67, 67, 80);
  transform: rotate(180deg);
  position: relative;
  right: 40px;
  top: 96px;
`