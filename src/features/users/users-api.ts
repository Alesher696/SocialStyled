import {Instance} from "common/api";


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10, term?:string) {
        return Instance.get(`users?page=${currentPage}&count=${pageSize}`, {params: {term}}).then(response => response.data)
    },
    getFollowedUsers(currentPage: number = 1, pageSize: number = 10) {
        return Instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${true}`).then(response => response.data)
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
