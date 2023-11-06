import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import Faq from './routes/Faq';
import Contact from './routes/Contact';
import Index from './routes/Index';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from "./routes/ErrorPage";
import UserRoot from "./routes/UserLayout";
import UserInfo from "./routes/UserInfo";
import UserEdit from "./routes/UserEdit";

// routing

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: "contact",
                element: <Contact/>
            }, {
                path: "faq",
                element: <Faq/>
            }
        ]
    },{
        path: "/user",
        element: <UserRoot />,
        children: [
            {
                index: true,
                element: <div>Hello gomaa</div>
            },
            {
                path: "info",
                element: <UserInfo/>
            }, {
                path: ":userId/edit",
                element: <UserEdit/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routes}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
