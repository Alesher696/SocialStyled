import {Dispatch} from "redux";
import {profileAPI} from "../common/api/api";
import {AppThunk} from "../redux/store";

export type profileActions = addPostType | setNewPostTextType | setUserProfileType


export type postType = {
    data: string
    id: number
    like: number
}

export type profileInfoType = {
    aboutMe: null | string,
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: {
        small: null | string,
        large: null | string
    }
}


export type initialProfileStateType = {
    posts: postType[]
    newPostText: string
    profileInfo: null | profileInfoType
}

const initialState: initialProfileStateType = {
    posts: [
        {id: 1, data: "Hello its my first", like: 9},
        {id: 2, data: "Hello its my second", like: 15},
        {id: 3, data: "What's up guys?", like: 2},
        {id: 4, data: "I'm cool kitty?", like: 2},
    ],
    newPostText: "",
    profileInfo: null

}

export const profileReducer = (state: initialProfileStateType = initialState, action: profileActions): initialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const value = 6
            const newPost = {id: value + 1, data: state.newPostText, like: 0}
            return {...state, posts: [...state.posts, newPost]}
        }
        case 'SET-NEW-POST-TEXT': {
            return {...state, newPostText: action.payload.newPostText}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profileInfo: action.payload.profile}
        }
        default:
            return state
    }
}

export type addPostType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

type setNewPostTextType = ReturnType<typeof setNewPostTextAC>

export const setNewPostTextAC = (newPostText: string) => {
    return {
        type: 'SET-NEW-POST-TEXT',
        payload: {
            newPostText
        }
    } as const
}

type setUserProfileType = ReturnType<typeof setUserProfileAC>

export const setUserProfileAC = (profile: profileInfoType) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {
            profile
        }
    } as const
}

export const getUserProfileTC = (userId: number): AppThunk => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(response =>{
            dispatch(setUserProfileAC(response.data))
                console.log(response.data)
        } )
    }
}