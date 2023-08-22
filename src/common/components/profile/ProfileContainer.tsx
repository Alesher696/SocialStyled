import React from 'react';
import {connect} from "react-redux";
import {storeType} from "../../../redux/store";
import {
    addPostAC,
    getUserProfileTC,
    getUserStatusTC,
    initialProfileStateType,
    setNewPostTextAC
} from "../../../redux/profile-reducer";
import {Profile} from "../profile/Profile";
import {initialAuthStateType} from "../../../redux/auth-reducer";


export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profile: initialProfileStateType
    auth: initialAuthStateType
}

type mapDispatchToPropsType = {
    addPostAC: () => void,
    setNewPostTextAC: (newPost: string) => void,
    getUserProfileTC:(userId:number)=> void,
    getUserStatusTC:(userId:number)=> void
}

const mapStateToProps = (state: storeType) => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostAC())
//         },
//         setNewPostText: (newPost: string) => {
//             dispatch(setNewPostTextAC(newPost))
//         },
//         // getUserProfile:(userId:number)=>{
//         //     dispatch(getUserProfileTC(userId))
//         // }
//     }
// }

export const ProfileContainer = connect(mapStateToProps, {addPostAC, setNewPostTextAC , getUserProfileTC, getUserStatusTC})(Profile)

