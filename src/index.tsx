import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';
import './index.css';
import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import {store} from "./redux/store";



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


