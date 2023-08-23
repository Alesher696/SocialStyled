import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';
import './index.css';
import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import {store} from "./redux/store";
// import {state, subscribe} from "./garbage/state";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         // loader: rootLoader,
//         // children: [
//         //     {
//         //         path: "team",
//         //         element: <Team />,
//         //         // loader: teamLoader,
//         //     },
//         // ],
//     },
// ]);



//===================================================================
// let rerenderEntireTree = (state:any)=>{
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App state={state}/>
//             </Provider>
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }
//
// rerenderEntireTree(state)
// subscribe(rerenderEntireTree)
//===================================================================


