import axios from "axios";


export type profileInfoResponseType={
    aboutMe: string,
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
}

export const Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '814d3cf1-9151-4829-ad9e-c7f2b77f0f6c'
    }
})
