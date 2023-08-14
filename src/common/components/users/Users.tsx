import React, {useEffect} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getUsersTC} from "../../../redux/users-reducer";
import {storeType} from "../../../redux/store";
import { Pagination } from 'antd';


export const Users = () => {

const users = useSelector((state: storeType) => state.users)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsersTC(1, 5))
    },[])


    const onClickPageHandler = (page: number)=>{
        dispatch(getUsersTC(page, 5))
    }

    return (
        <UsersWrapper>
            <PaginationWrapper defaultCurrent={1} total={users.totalUsersCount} onChange={onClickPageHandler}></PaginationWrapper>
            <PageWrapper>
            </PageWrapper>
            {users.users.map(el=> <UsersName key={el.id}>{el.name}</UsersName>)}
        </UsersWrapper>
    );
};


const UsersWrapper = styled.div`
  display: flex;
  color: white;
  font-size: 24px;
  margin: 0 auto;
  flex-direction: column;
  min-height: 100vh;
  
`

const PageWrapper = styled.div`

`

const Page = styled.span`
cursor: pointer;
  margin-inline: 2px;
`

const UsersName = styled.div`

`

const PaginationWrapper = styled(Pagination)`
  .ant-pagination-item {
    margin: 0;
    border-radius: 50%;

  }

  
  .colorText {
    rgba(243, 243, 243, 0.88)
  }

`
