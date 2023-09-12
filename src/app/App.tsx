import React, {lazy, useEffect} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {LayOut} from "app/LayOut";
import Music from "../common/components/music/Music";
import {Settings} from "common/components/settings/Settings";
import {Loader} from "common/components/loader/Loader";
import {Login} from "features/login/Login";
import {tasksThunks} from "app/appSlice";
import {useAppDispatch, useAppSelector} from "common/hooks/selectors";
import {selectIsInitialized} from "app/app-selectors";



const ProfilePage = lazy(()=> import('features/profile/Profile')
    .then(module => ({default: module.Profile})))

const DialogsPage = lazy(()=> import("features/dialogs/Dialogs")
    .then(module => ({default: module.Dialogs})))

const UsersPage = lazy(()=> import("features/users/Users")
    .then(module => ({default: module.Users})))


export const App = ()=>{

    console.log('app is rendered ')

    const isInitialized = useAppSelector(selectIsInitialized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(tasksThunks.initializedApp())
    }, [])

    if (!isInitialized) {
        return <Loader/>;
    }
        return (
          <RouterProvider router={router}/>
        );
}


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={'/SocialStyled/'} element={<LayOut/>}>
            <Route index element={<ProfilePage/>}></Route>
            <Route path={'/SocialStyled/profile/:userId?'} element={<ProfilePage/>}></Route>
            <Route path={'/SocialStyled/dialogs/:userId?/messages?'} element={<DialogsPage/>}></Route>
            <Route path={'/SocialStyled/users'} element={<UsersPage/>}></Route>
            <Route path={'/SocialStyled/music'} element={<Music/>}></Route>
            <Route path={'/SocialStyled/settings'} element={<Settings/>}></Route>
        </Route>
        <Route path={'/SocialStyled/login'} element={<Login/>}></Route>
    </>
))