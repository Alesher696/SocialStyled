import React from 'react';
import {NavLink} from "react-router-dom";
import {getMessagesListTC, setActiveUserIdAC} from "features/dialogs/dialogs-reducer";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "common/hooks/selectors";
import {selectDialogs} from "features/dialogs/dialogs-selectors";
import {Loader} from "common/components/loader/Loader";


export const UsersDialogs = () => {

    console.log('usersDialogs is rendered ')

    const userDialogs = useAppSelector(selectDialogs)
    const dispatch = useAppDispatch()

    const userOnClickHandler = (userId: number) => {
        dispatch(setActiveUserIdAC(userId))
        dispatch(getMessagesListTC(userId))
    }

    const userList = userDialogs?.map((el) =>
        <User key={el.id} to={`/SocialStyled/dialogs/${el.id}/messages`} onClick={() => userOnClickHandler(el.id)}>
            <div>
                {el.userName}
            </div>
            <div>
                {el.photos.small ?
                    <UserAvatar src={el.photos.small}/> :
                    <DefaultAvatar>
                        {el.userName.trim()[0].toUpperCase()}
                    </DefaultAvatar>}
                {el.hasNewMessages && <NewMessageIs>{el.newMessagesCount}</NewMessageIs>}
                {/*<NewMessageIs>{el.newMessagesCount}</NewMessageIs>*/}
            </div>
        </User>
    )
    if(!userDialogs){
        return <Loader/>
    }
    return (
        <UserListWrapper>
            {userList}
        </UserListWrapper>
    );
};

const NewMessageIs = styled.div`
  position: relative;
  bottom: 65px;
  left: 40px;
  background-color: rgba(210, 30, 30, 0.83);
  width: 20px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
`

const UserAvatar = styled.img`
  border-radius: 50px;
  width: 50px;
  height: 50px;
`

const DefaultAvatar = styled.div`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: ${() => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`};
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 24px;
`

const User = styled(NavLink)`
  cursor: pointer;
  width: max-content;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
  padding-inline: 10px;
  //background-color: #39404b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  flex-direction: row;
  gap: 10px;

  &:hover {
    background-color: #3e4452;
  }
`

const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px;
`