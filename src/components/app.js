import React,{ useState, createContext,useEffect } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import axios from "axios";

import ErrorPage from "./error.js";
import Home from './home.js';
import Accordian from './accordian/accordian.js';
import Blog from './blog/blog.js';
import BlogList from './blog/blog-list'

export const Context = createContext()

const App = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get(process.env.backendUrl)
            setData(response.data.blogs)
        })()
    }, [])

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
                    path: "questions/:category",
                    element: <Accordian />,
                },
                {
                    path: "blogs/:category",
                    element:<BlogList />
                },
                {
                    path: "blog/:blogId",
                    element: <Blog/>,
                },
            ],
        }
    ]);

    return (
        <Context.Provider value={data}>
            <RouterProvider router={router}/>
        </Context.Provider>
    )
}
export default App;