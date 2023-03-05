import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import ErrorPage from "./error";
import Home from './home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "javascript",
        element: <Home/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "golang",
        element: <Home/>,
        errorElement: <ErrorPage />,
    },
]);

const App = (props) => {
    return (
        <RouterProvider router={router} />
    )
}
export default App;