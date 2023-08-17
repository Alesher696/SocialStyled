import React, {useEffect} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {followUserTC, getUsersTC, setCurrentPageAC, unFollowUserTC, userType} from "../../../redux/users-reducer";
import {storeType} from "../../../redux/store";
import {Pagination} from 'antd';


export const Users = () => {

    const users = useSelector((state: storeType) => state.users)
    const dispatch = useDispatch()

    const userFollowerStatus = ['follow', 'unfollow']

    useEffect(() => {
        dispatch(getUsersTC(users.currentPage, users.pageSize))
    }, [])

    const onClickPageHandler = (page: number) => {
        dispatch(setCurrentPageAC(page));
        dispatch(getUsersTC(page, users.pageSize))
    }

    const followUnfollowHandler = (userId: number, status: boolean) => {
        if (status) {
            dispatch(unFollowUserTC(userId));
        } else {
            dispatch(followUserTC(userId));
        }
    }

    return (
        <UsersWrapper>
            <div>
                <PaginationWrapper defaultCurrent={1} total={users.totalUsersCount} onChange={onClickPageHandler}
                                   showSizeChanger={false}></PaginationWrapper>
                {users.users.map(el =>
                    <UsersName key={el.id}>
                        {el.name}
                        <button
                            onClick={() => followUnfollowHandler(el.id, el.followed)}>{el.followed ? userFollowerStatus[1] : userFollowerStatus[0]}
                        </button>
                    </UsersName>)}
            </div>
            <div>
                <br/>
                <div>followedUsers:</div>
                {users.followedUsers.map(el =>
                    <UsersName key={el.id}>
                        {el.name}
                        <button
                            onClick={() => followUnfollowHandler(el.id, el.followed)}>{el.followed ? userFollowerStatus[1] : userFollowerStatus[0]}
                        </button>
                    </UsersName>)}
            </div>
        </UsersWrapper>
    );
};


const UsersWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 24px;
  margin: 0 auto;
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
