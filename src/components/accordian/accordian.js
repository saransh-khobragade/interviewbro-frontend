import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { Context } from '../app'

export default function Accordian() {

    let blogList = useContext(Context);
    let { category } = useParams();
    category = category || 'javascript'

    blogList = blogList.filter(x => {
        if (x.blogCategory === category) {
            return true
        } else {
            return false
        }
    })

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
                {blogList.length ? blogList.map(x => {
                    return <details key={x.id}>
                        <summary>{x.blogTitle}</summary>
                        <p>{x.blogShortanwer}</p>
                    </details>
                }) : null}
            </main>
        </div>
    );
}
