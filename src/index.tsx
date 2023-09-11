import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/App';
import './index.css';
import {Provider} from "react-redux";
import {store} from "app/store";





ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
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

