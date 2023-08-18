import axios from "axios";
import {profileInfoType} from "../../redux/profile-reducer";

//22597 id


type responseType<T> = {
    data: T
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}

const Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '814d3cf1-9151-4829-ad9e-c7f2b77f0f6c'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return Instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getFollowedUsers(currentPage: number = 1, pageSize: number = 10) {
        return Instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${true}`).then(response => response.data)
    }
}
 
export const profileAPI = {
    getUserProfile(userId: number) {
        return Instance.get<responseType<profileInfoType>>(`/profile/${userId}`)
    },
    getUserStatus(userId: string) {
        return Instance(`/profile/status/${userId}`)
    },
    setProfileStatus(status: string) {
        return Instance.put(`/profile/status`, {"status": status})
    },
    setProfilePhoto(image: string) {
        return Instance.put(`/profile/photo`, {"image": image})
    }
}

export const authAPI = {
    authMe() {
        return Instance.get(`/auth/me`)
    },
    logIn(email: string, password: string) {
        return Instance.post(`/auth/login`, {"email": email, "password": password}, {})
    },
    logOut() {
        return Instance.delete(`/auth/login`)
    }
}

export const followAPI = {
    follow(userId: number) {
        return Instance.post(`/follow/${userId}`)
    },
    unfollow(userId: number) {
        return Instance.delete(`/follow/${userId}`)
    },
    getFollowedUser(userId: number) {
        return Instance.get(`/follow/${userId}`)
    }
}














// export type DataType={
//     email:string
//     password: string
//     rememberMe?: boolean
//     captcha?:boolean
// }