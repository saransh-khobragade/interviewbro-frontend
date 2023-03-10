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
            setData(response.data.blog)
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
                    path: "questions/:topic",
                    element: <Accordian />,
                },
                {
                    path: "datastructure",
                    element:<BlogList />
                },
                {
                    path: "datastructure/:blogId",
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