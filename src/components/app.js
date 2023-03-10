import React,{ useState, createContext } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error.js";
import Home from './home.js';
import Accordian from './accordian/accordian.js';
import Blog from './blog/blog.js';
import BlogList from './blog/blog-list'

export const Context = createContext()

const App = () => {
    
    const [data, setData] = useState([
        {
            "blogId":"how-to-host-your-website-into-aws",
            "blogCategory":"HowToBlogs",
            "blogTitle":"How to host your website into AWS",
            "blogShortanwer":"",
            "blogContent":[
                { "type":"heading","data": "How to host your website into AWS" },
                { "type":"image","data": "https://i.postimg.cc/nLWGMXBV/Screenshot-2023-02-04-at-9-17-05-AM.png" },
                { "type":"subheading","data": "Build your website" },
                { "type":"paragraph","data": "abskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahs" },
                { "type":"list","data": ["first", "second", "third"] },
                {"type":"code",
                    "data": `                                                                                      
                num = 11
                if num > 1:
                    for i in range(2, int(num/2)+1):
                        if (num % i) == 0:
                            print(num, "is not a prime number")
                            break
                    else:
                        print(num, "is a prime number")
                else:
                    print(num, "is not a prime number")
                `}
            ]
        }
    ]);


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