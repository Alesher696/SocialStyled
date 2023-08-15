import React, {ChangeEvent, useEffect} from 'react';
import styled from "styled-components";
import theme from '../../assets/1681961897_kartinki-pibig-info-p-nasishchennaya-kartinka-arti-krasivo-1.jpg'
import avatar from '../../assets/1676295972138872283.png'
import {MyPosts} from "../../../common/components/profile/myPosts/MyPosts";
import {ProfilePropsType} from "../profile/ProfileContainer";


type addBtnConditionProps={
    condition: boolean
}

export const Profile = (props:ProfilePropsType) => {

//start is here

    // const profile = useSelector((state: storeType) => state.profile)
    // const dispatch = useDispatch()

    useEffect(()=>{
        props.getUserProfileTC(props.auth.id!)
    },[])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewPostTextAC(e.currentTarget.value)
    }

    const addPost = () => {
        props.addPostAC()
        props.setNewPostTextAC('')
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
                <AddPostButton onClick={addPost} condition={!!props.profile.newPostText} disabled={!props.profile.newPostText}> Add post </AddPostButton>
                <PostAreaInput onChange={onChangeHandler} placeholder={"What's News?"} value={props.profile.newPostText}/>
            </PostAddWrapper>
            <MyPosts profile={props.profile}/>
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.div`
  background-color: #2e2f3a;
  display: flex;
  height: 710px;
  width: 800px;
  margin: 0 auto;
  //border: 1px solid black;
  flex-direction: column;
  padding-bottom:10px;
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

export const AddPostButton = styled.button<addBtnConditionProps>`
  height: 30px;
  background-color: ${props => props.condition ? '#3D50FA' : 'rgba(61, 80, 250, 0.6)'};
  border: none;
  outline: none;
  border-radius: 7px;
  width: 150px;
  color: ${props => props.condition ? 'white' : 'grey'};
  cursor: ${props => props.condition ? 'pointer' : 'default'};
  margin-bottom: 5px;
  z-index: 2;
  -webkit-box-shadow: ${props => props.condition ? '0px 1px 19px 4px #3D50FA' : 'none'};
  -moz-box-shadow: ${props => props.condition ? '0px 1px 19px 4px #3D50FA' : 'none'};
  box-shadow: ${props => props.condition ? '0px 1px 19px 4px #3D50FA' : 'none'};
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
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


