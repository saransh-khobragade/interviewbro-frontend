import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function Accordian() {

    const [data, setData] = useState([])

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...data];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.question.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
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
                <input onChange={filterBySearch} style={{ "height": "10%", width: "100%" }} type="text" id="firstname" name="firstname" placeholder="Search" required />
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
