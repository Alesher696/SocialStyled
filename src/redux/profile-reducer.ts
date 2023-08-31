import {profileAPI, profileInfoResponseType} from "../common/api/api";
import {AppDispatch, AppThunk} from "../redux/store";


export type profileActions =
    addPostType |
    setNewPostTextType |
    setUserProfileType |
    setUserStatusType |
    setProfilePhotoType


export type postType = {
    data: string
    id: number
    like: number
}

export type contactsType = {
    facebook: null | string,
    website: null | string,
    vk: null | string,
    twitter: null | string,
    instagram: null | string,
    youtube: null | string,
    github: null | string,
    mainLink: null | string
}

export type profileInfoType = {
    aboutMe: null | string,
    contacts: contactsType
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
    status: string | null
}

const initialState: initialProfileStateType = {
    posts: [
        {id: 1, data: "Hello its my first", like: 9},
        {id: 2, data: "Hello its my second", like: 15},
        {id: 3, data: "What's up guys?", like: 2},
        {id: 4, data: "I'm cool kitty?", like: 2},
    ],
    newPostText: "",
    profileInfo: null,
    status: null
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
        case 'SET-USER-STATUS': {
            return {...state, status: action.payload.status}
        }
        // case "SET-PROFILE-PHOTO":{
        //     return{...state, profileInfo:{...state.profileInfo, photos:action.payload.photos}}
        // }
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

type setUserStatusType = ReturnType<typeof setUserStatusAC>

export const setUserStatusAC = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        payload: {
            status
        }
    } as const
}

type setProfilePhotoType = ReturnType<typeof setProfilePhotoAC>

const setProfilePhotoAC = (photos: { small: null | string, large: null | string }) => {
    return {
        type: "SET-PROFILE-PHOTO",
        payload: {
            photos
        }
    } as const
}

export const getUserProfileTC = (userId: number): AppThunk => {
    return (dispatch: AppDispatch) => {
        try {
            profileAPI.getUserProfile(userId)
                .then(response => {
                    dispatch(setUserProfileAC(response.data))
                    dispatch(getUserStatusTC(userId))
                })
        } catch (e) {
            console.log(e)
        }
    }
}

export const setUserProfileInfoTC = (profileData: profileInfoResponseType): AppThunk => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await profileAPI.setProfileInfo(profileData)
        } catch (e) {
            console.log(e)
        }
    }
}

export const setUserStatusTC = (status: string): AppThunk => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await profileAPI.setProfileStatus(status)
            if (result.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const getUserStatusTC = (userId: number): AppThunk => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await profileAPI.getUserStatus(userId)
            dispatch(setUserStatusAC(result.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const setProfilePhotoTC = (image: File): AppThunk => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await profileAPI.setProfilePhoto(image)
            if (result.data.resultCode === 0) {
                dispatch(setProfilePhotoAC(result.data.data.photos))
            }
        } catch (e) {
            console.log(e)
        }
    }
}
