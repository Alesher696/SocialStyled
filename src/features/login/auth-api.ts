import {Instance} from "common/api";


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