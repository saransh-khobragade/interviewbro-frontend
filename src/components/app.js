import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from './home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "home",
        element: <Home/>,
    },
]);

const App = (props) => {
    return (
        <RouterProvider router={router} />
    )
}
export default App;