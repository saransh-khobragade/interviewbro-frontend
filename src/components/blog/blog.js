import React, { useContext } from 'react';
import { Context } from '../app'
import { useParams } from "react-router-dom";

import List from './list'
import Paragraph from './paragraph'
import Image from './image';
import CodeBlock from './code-block'
import Heading from './heading';
import SubHeading from './sub-heading';

export default function Blog() {

    let { blogId } = useParams();

    const blogList = useContext(Context);
    blogList.filter(x=>x.blogId===blogId)
    
    const data = blogList[0].blogContent

    return (
        <div>
            <main className="container">
                {
                    data.map((x,i)=>{
                        if(x.type==="heading") {return <Heading data={x.data} key={i}/>}
                        if(x.type==="subheading") {return <SubHeading data={x.data} key={i}/>}
                        if(x.type==="paragraph") {return <Paragraph data={x.data} key={i}/>}
                        if(x.type==="list") {return <List data={x.data} key={i}/>}
                        if(x.type==="image") {return <Image data={x.data} key={i}/>}
                        if(x.type==="code") {return <CodeBlock data={x.data} key={i}/>}
                    })
                }
            </main>
        </div>
    );
}
