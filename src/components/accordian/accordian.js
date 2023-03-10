import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function Accordian() {

    const [data, setData] = useState([])

    const filterBySearch = async (event) => {        
        const query = event.target.value;
        const response = await axios.get(process.env.backendUrl)

        let updatedList = [...response.data.question];
        updatedList = updatedList.filter((item) => {
          return item.question.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setData(updatedList);
    }

    useEffect(() => {
        (async () => {
            const response = await axios.get(process.env.backendUrl)
            setData(response.data.question)
        })()
    }, [])

    return (
        <div>
            <main className="container">
                <input onChange={filterBySearch} style={{ "height": "5%", width: "100%" }} type="text" id="firstname" name="firstname" placeholder="Search" required />
            </main>

            <main className="container">
                {data.length?data.map(x => {
                    return <details key={x.id}>
                        <summary>{x.question}</summary>
                        <p>{x.shortanswer}</p>
                    </details>
                }):null}
            </main>
        </div>
    );
}
