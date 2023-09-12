import {Instance} from "common/api";
import {profileInfoResponseType} from "common/api/api";


export const profileAPI = {
    getUserProfile(userId: number) {
        return Instance.get(`/profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return Instance(`/profile/status/${userId}`)
    },
    setProfileStatus(status: string) {
        return Instance.put(`/profile/status`, {"status": status})
    },
    setProfilePhoto(image: File) {
        const formData=new FormData();
        formData.append("image", image)
        return Instance.put(`/profile/photo`, formData, { headers:{
                'Content-Type':'multipart/form-data'
            }})
    },
    setProfileInfo(profileData:profileInfoResponseType){
        return Instance.put(`/profile`, {profileData})
    }
}