import React, { useState,useContext,useEffect } from 'react';
import { Context } from '../app'

export default function Accordian() {

    const blogList = useContext(Context);

    const filterBySearch = async (event) => {        
        const query = event.target.value;
        const response = await axios.get(process.env.backendUrl)

        let updatedList = [...response.data.question];
        updatedList = updatedList.filter((item) => {
          return item.question.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setData(updatedList);
    }

    return (
        <div>
            <main className="container">
                <input onChange={filterBySearch} style={{ "height": "5%", width: "100%" }} type="text" id="firstname" name="firstname" placeholder="Search" required />
            </main>

            <main className="container">
                {blogList.length?blogList.map(x => {
                    return <details key={x.id}>
                        <summary>{x.blogTitle}</summary>
                        <p>{x.blogShortanwer}</p>
                    </details>
                }):null}
            </main>
        </div>
    );
}
