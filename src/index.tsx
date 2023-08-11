import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';
import './index.css';
import {BrowserRouter, createBrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        // loader: rootLoader,
        // children: [
        //     {
        //         path: "team",
        //         element: <Team />,
        //         // loader: teamLoader,
        //     },
        // ],
    },
]);