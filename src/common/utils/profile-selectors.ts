import {RootState} from "app/store";


export const selectProfileInfo = (state: RootState) => state.profile.profileInfo
export const selectFullName = (state: RootState) => state.profile.profileInfo?.fullName
export const selectContacts = (state: RootState) => state.profile.profileInfo?.contacts
export const selectPhotos = (state: RootState) => state.profile.profileInfo?.photos
export const selectAboutMe = (state: RootState) => state.profile.profileInfo?.aboutMe
export const selectLookingForAJob = (state: RootState) => state.profile.profileInfo?.lookingForAJob
export const selectLookingForAJobDescription = (state: RootState) => state.profile.profileInfo?.lookingForAJobDescription

export const selectStatus = (state: RootState) => state.profile.status
export const selectPosts = (state: RootState) => state.profile.posts
export const selectNewPost= (state: RootState) => state.profile.newPostText

