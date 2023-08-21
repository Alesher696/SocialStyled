import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LayOut} from "../app/LayOut";
import {Dialogs} from "../common/components/dialogs/Dialogs";
import {Users} from "../common/components/users/Users";
import Music from "../common/components/music/Music";
import {Settings} from "../common/components/settings/Settings";
import Login from "../features/login/Login";
import {ProfileContainer} from "../common/components/profile/ProfileContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "../redux/app-reducer";
import {storeType} from "../redux/store";
import {Loader} from "../common/components/loader/Loader";


export function App(props: any) {

    console.log('app is rendered ')

    const app = useSelector((state: storeType) => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!app.isInitialized) {
        return <Loader/>
    } else

        return (
            <Routes>
                <Route path={'/'} element={<LayOut/>}>
                    <Route index element={<ProfileContainer/>}></Route>
                    <Route path={'/profile/:userId?'} element={<ProfileContainer/>}></Route>
                    <Route path={'/dialogs/:userId?/messages?'} element={<Dialogs/>}></Route>
                    {/*<Route path={'/dialogs/:userId?/messages?'} element={<Messages/>}></Route>*/}
                    <Route path={'/users'} element={<Users/>}></Route>
                    <Route path={'/music'} element={<Music/>}></Route>
                    <Route path={'/settings'} element={<Settings/>}></Route>
                </Route>
                <Route path={'/login'} element={<Login/>}></Route>
            </Routes>
        );
}


//=========================/////===================================

{/*<Button>button</Button>*/
}
{/*<Button $primary> primary button</Button>*/
}
{/*  <Link> link </Link>*/
}

// const Link = styled.a`
//   color: purple;
//   background-color: black;
// `
//
// const Button = styled.button<{ $primary?: boolean; }>`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #BF4F74;
//   color: #BF4F74;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;
//
//   ${props => props.$primary && css`
//     background: #BF4F74;
//     color: white;
//   `}
//   &:hover ${Link} {
//     background-color: aquamarine;
//   }
//
//   &:hover {
//     background-color: #15ad96;
//   }
// `
//=========================/////===================================
