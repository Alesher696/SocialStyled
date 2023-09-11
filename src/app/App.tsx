import React, {useEffect} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom';
import {LayOut} from "app/LayOut";
import {Dialogs} from "common/components/dialogs/Dialogs";
import {Users} from "common/components/users/Users";
import Music from "../common/components/music/Music";
import {Settings} from "common/components/settings/Settings";
import {Loader} from "common/components/loader/Loader";
import {Login} from "features/login/Login";
import {tasksThunks} from "app/appSlice";
import {useAppDispatch, useAppSelector} from "common/hooks/selectors";
import {selectIsInitialized} from "common/utils/app-selectors";
import {Profile} from "common/components/profile/Profile";


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
            <Route index element={<Profile/>}></Route>
            <Route path={'/SocialStyled/profile/:userId?'} element={<Profile/>}></Route>
            <Route path={'/SocialStyled/dialogs/:userId?/messages?'} element={<Dialogs/>}></Route>
            <Route path={'/SocialStyled/users'} element={<Users/>}></Route>
            <Route path={'/SocialStyled/music'} element={<Music/>}></Route>
            <Route path={'/SocialStyled/settings'} element={<Settings/>}></Route>
        </Route>
        <Route path={'/SocialStyled/login'} element={<Login/>}></Route>
    </>
))