import {Dispatch} from "redux";
import {usersAPI} from "../common/api/api";

export type usersActions = setUsersType | setUsersTotalCountType | setCurrentPageType

export type userType = {
    id: number
    followed: boolean
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
}

type initialStateType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching?: boolean
    followingInProgress: number[]
}

const initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: []
}


export const usersReducer = (state: initialStateType = initialState, action: usersActions): initialStateType => {
    switch (action.type) {
        case 'SET-USERS': {
            return {...state, users: action.payload.users}
        }
        case 'SET-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.payload.userTotalCount}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.payload.currentPage}
        }
        default:
            return state
    }
}


export type setUsersType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: userType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users: users
        }
    } as const
}

export type setUsersTotalCountType = ReturnType<typeof setUserTotalCountAC>

export const setUserTotalCountAC = (userTotalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        payload: {
            userTotalCount: userTotalCount
        }

    } as const
}

export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage: currentPage
        }
    } as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setUsersAC(data.items))
                dispatch(setUserTotalCountAC(data.totalCount))
            })
    }
}