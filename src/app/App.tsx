import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {LayOut} from "app/LayOut";
import {Dialogs} from "common/components/dialogs/Dialogs";
import {Users} from "common/components/users/Users";
import Music from "../common/components/music/Music";
import {Settings} from "common/components/settings/Settings";
import {ProfileContainer} from "common/components/profile/ProfileContainer";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "common/components/loader/Loader";
import {Login} from "features/login/Login";
import {RootState} from "app/store";
import {tasksThunks} from "app/appSlice";


export function App(props: any) {

    console.log('app is rendered ')

    const app = useSelector((state: RootState) => state.app)
    const profile = useSelector((state: RootState) => state.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(tasksThunks.initializedApp())
    }, [])

    if (!app.isInitialized) {
        return <Loader/>;
    }

    if (profile.profileInfo === undefined || null) {
        return <Loader/>;
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
