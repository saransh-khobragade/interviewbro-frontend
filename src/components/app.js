import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error.js";
import Home from './home.js';
import Accordian from './accordian.js';
import Blog from './blog.js';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Accordian />,
            },
            {
                path: "questions/:topic",
                element: <Accordian />,
            },
            {
                path: "blog",
                element: <Blog/>,
            },
        ],
    }
]);

const App = (props) => {
    return (
        <RouterProvider router={router} />
    )
}
export default App;