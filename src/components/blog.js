import React, { useState, useEffect } from 'react';
import axios from "axios";

import List from './list'
import Paragraph from './paragraph'
import Image from './image';
import CodeBlock from './code-block'
import Heading from './heading';
import SubHeading from './sub-heading';

export default function Blog() {

    const data = [
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
