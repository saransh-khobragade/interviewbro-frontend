import React, { useState, useEffect } from 'react';
import axios from "axios";
import { CopyBlock, ocean } from "react-code-blocks";

export default function Blog() {

    let code = `                                                                                      
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
    `;
    for(let i=0;i<220;i++){ code +=" ";}
    
    const language = "python"
    const showLineNumbers = true

    return (
        <div>
            <main className="container">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 >How to host your website into AWS</h3>
                </div>
                <div>
                    <h4>Build your website</h4>
                    <p>abskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahsabskdhjanlnasndlandlaslndkandlknalsndlansdlknaskldnalksndlandjalsnoahckanbhahnsdoahs</p>
                    <ol>
                        <li>first</li>
                        <li>second</li>
                        <li>third</li>
                    </ol>
                    <img src="https://i.postimg.cc/nLWGMXBV/Screenshot-2023-02-04-at-9-17-05-AM.png"></img>
                </div>

                <div className="container" >
                    <CopyBlock
                        text={code}
                        language={language}
                        showLineNumbers={showLineNumbers}
                        theme={ocean}
                        wrapLines={true}
                        codeBlock
                    />
                </div>

            </main>
        </div>
    );
}
