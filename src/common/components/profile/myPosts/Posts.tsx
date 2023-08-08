import React, {useState} from 'react';
import styled from "styled-components";
import avatar from '../../../assets/1676295972138872283.png'

export const Posts = (props: any) => {

    const postList = props.posts.map((el: string, index: any) => (<Post title={el} key={index}/>))
    // const postList = props.posts.map((el: string) => { return <Post title={el}/> })

    return (
        <MyPosts>
            {postList}
        </MyPosts>
    );
};

const Post = (props: any) => {
    return <PostStyled>
        <PostAvatar/>
        <PostTitle>
            {props.title}
        </PostTitle>
    </PostStyled>
}

//=========================MYPOSTS=================================

const MyPosts = styled.div`
  display: flex;
  margin-top: 40px;
  margin-inline: 10px;
  flex-flow: wrap;
  gap: 5px;
  justify-content: center;
`

const PostStyled = styled.div`
  min-width: 300px;
  width: max-content;
  min-height: 100px;
  height: max-content;
  background-color: rgba(89, 89, 108, 0.47);
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-wrap: anywhere;
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
  margin-right: 10px;
`

//=========================/////===================================
