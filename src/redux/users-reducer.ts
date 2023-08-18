import {Dispatch} from "redux";
import {followAPI, usersAPI} from "../common/api/api";


export type usersActions = setUsersType |
    setUsersTotalCountType |
    setCurrentPageType |
    setFollowedUsersType |
    setFollowUserType |
    setUnfollowUserType

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
    followedUsers: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching?: boolean
    followingInProgress: number[]
}

const initialState: initialStateType = {
    users: [],
    followedUsers: [],
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
        case 'SET-FOLLOWED-USERS': {
            return {...state, followedUsers: action.payload.users}
        }
        case 'SET-TOTAL-COUNT': {
            return {...state, totalUsersCount: action.payload.userTotalCount}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET-FOLLOW-USER": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el),
                // followedUsers: state.followedUsers.filter((el) => el.followed)
            }
        }
        case "SET-UNFOLLOW-USER": {
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el),
                // followedUsers: state.followedUsers.filter((el) => el.followed)
            }
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

export type setFollowedUsersType = ReturnType<typeof setFollowedUsersAC>

export const setFollowedUsersAC = (users: userType[]) => {
    return {
        type: 'SET-FOLLOWED-USERS',
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

export type setFollowUserType = ReturnType<typeof setFollowUserAC>

const setFollowUserAC = (userId: number) => {
    return {
        type: 'SET-FOLLOW-USER',
        payload: {
            userId
        }
    } as const
}

export type setUnfollowUserType = ReturnType<typeof setUnfollowUserAC>

const setUnfollowUserAC = (userId: number) => {
    return {
        type: 'SET-UNFOLLOW-USER',
        payload: {
            userId
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

export const getFollowedUsersTC = ()=>{
    return (dispatch:Dispatch)=>{
        usersAPI.getFollowedUsers(1, 100)
            .then((data) => {
                dispatch(setFollowedUsersAC(data.items))
            })
    }
}

export const followUserTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        followAPI.follow(userId)
            .then((data) => {
                dispatch(setFollowUserAC(userId))
            })
        // usersAPI.getFollowedUsers(1, 5)
        //     .then((data) => {
        //         dispatch(setFollowedUsersAC(data.items))
        //     })
    }
}

export const unFollowUserTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        followAPI.unfollow(userId)
            .then((data) => {
                dispatch(setUnfollowUserAC(userId))
            })
        // usersAPI.getFollowedUsers(1, 5)
        //     .then((data) => {
        //         dispatch(setFollowedUsersAC(data.items))
        //     })
    }
}