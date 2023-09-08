import React, {ChangeEvent, useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {
    followUserTC,
    getFollowedUsersTC,
    getUsersTC,
    setCurrentPageAC,
    unFollowUserTC
} from "redux/users-reducer";
import {Pagination} from 'antd';
import {NavLink} from "react-router-dom";
import {getMessagesListTC, setActiveUserIdAC} from "redux/dialogs-reducer";
import {useAppDispatch, useAppSelector} from "common/hooks/selectors";
import {
    selectCurrentPage,
    selectFollowedUsers,
    selectPageSize,
    selectTotalUsersCount,
    selectUsers
} from "common/utils/users-selectors";


export const Users = () => {

    console.log('users is rendered ')

    const pageSize = useAppSelector(selectPageSize)
    const currentPage = useAppSelector(selectCurrentPage)
    const totalUsersCount = useAppSelector(selectTotalUsersCount)
    const users = useAppSelector(selectUsers)
    const followedUsers = useAppSelector(selectFollowedUsers)
    const dispatch = useAppDispatch()

    const userFollowerStatus = ['follow', 'unfollow']
    const [termUser, setTermUser] = React.useState('')

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
        dispatch(getFollowedUsersTC())
    }, [])

    const onClickPageHandler = (page: number) => {
        dispatch(setCurrentPageAC(page));
        dispatch(getUsersTC(page, pageSize, termUser))
    }

    const followUnfollowHandler = (userId: number, status: boolean) => {
        if (status) {
            dispatch(unFollowUserTC(userId));
        } else {
            dispatch(followUserTC(userId));
        }
    }

    const getSearchUserHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(getUsersTC(currentPage, pageSize, e.currentTarget.value))
        setTermUser(e.currentTarget.value)
    }

    const onClickActiveUserIdHandler = (userId: number, userName: string) => {
        dispatch(setActiveUserIdAC(userId))
        dispatch(getMessagesListTC(userId))
    }

    return (
        <UsersWrapper>
            <div>
                <input onChange={getSearchUserHandler}/>
                <button> search...</button>
            </div>


            <div>
                {users.map(el =>
                    <UsersName key={el.id}>
                        {el.name}
                        <br/>
                        {el.id}
                        <button
                            onClick={() => followUnfollowHandler(el.id, el.followed)}>{el.followed ? userFollowerStatus[1] : userFollowerStatus[0]}
                        </button>
                        <NavLink to={`/SocialStyled/dialogs/${el.id}/messages`}
                                 onClick={() => onClickActiveUserIdHandler(el.id, el.name)}>
                            <button>Write a message</button>
                        </NavLink>
                    </UsersName>)}
            </div>
            <br/>
            <PaginationWrapper defaultCurrent={1} total={totalUsersCount} onChange={onClickPageHandler}
                               showSizeChanger={false}></PaginationWrapper>
            <div>
                <br/>
                <div>followedUsers:</div>
                {followedUsers.map(el =>
                    <UsersName key={el.id}>
                        {el.name}
                        <button
                            onClick={() => followUnfollowHandler(el.id, el.followed)}>{el.followed ? userFollowerStatus[1] : userFollowerStatus[0]}
                        </button>
                        <NavLink to={`/SocialStyled/dialogs/${el.id}/messages`}
                                 onClick={() => onClickActiveUserIdHandler(el.id, el.name)}>
                            <button>Write a message</button>
                        </NavLink>
                    </UsersName>)}
            </div>
        </UsersWrapper>
    );
};

const UsersWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 24px;
  margin: 3em auto;
  flex-direction: column;
  min-height: 720px;
`

const UsersName = styled.div`

`

const PaginationWrapper = styled(Pagination)`
  .ant-pagination-item {
    margin: 0;
  }
`
