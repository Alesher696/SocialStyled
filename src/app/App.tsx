import React, {useEffect, useLayoutEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LayOut} from "../app/LayOut";
import {Dialogs} from "../common/components/dialogs/Dialogs";
import {Users} from "../common/components/users/Users";
import Music from "../common/components/music/Music";
import {Settings} from "../common/components/settings/Settings";
import {ProfileContainer} from "../common/components/profile/ProfileContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "../redux/app-reducer";
import {storeType} from "../redux/store";
import {Loader} from "../common/components/loader/Loader";
import {Login} from "../features/login/Login";


export function App(props: any) {

    console.log('app is rendered ')

    const auth = useSelector((state: storeType) => state.auth)
    const app = useSelector((state: storeType) => state.app)
    const profile = useSelector((state: storeType) => state.profile)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!app.isInitialized) {
        return <Loader/>; // Отображаем Loader, если приложение не инициализировано
    }

    if (profile.profileInfo === undefined || null) {
        return <Loader/>; // Отображаем Loader, если profileInfo === null
    }
        return (
            <Routes>
                <Route path={'/SocialStyled/'} element={<LayOut/>}>
                    <Route index element={<ProfileContainer/>}></Route>
                    <Route path={'/SocialStyled/profile/:userId?'} element={<ProfileContainer/>}></Route>
                    <Route path={'/SocialStyled/dialogs/:userId?/messages?'} element={<Dialogs/>}></Route>
                    <Route path={'/SocialStyled/users'} element={<Users/>}></Route>
                    <Route path={'/SocialStyled/music'} element={<Music/>}></Route>
                    <Route path={'/SocialStyled/settings'} element={<Settings/>}></Route>
                </Route>
                <Route path={'/SocialStyled/login'} element={<Login/>}></Route>
            </Routes>
        );
}
