import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const backendUrl = process.env.backendUrl
      const response = await axios.get(backendUrl)
      setData(response.data.movies)

    })()
  }, [])

  return (
    <div>
      <main class="container">
        <figure>
          <nav>



            <ul>
              <li><a href="/"><strong>InterviewBro</strong></a></li>
            </ul>
            <ul>
              <li><a href="#">Javascript</a></li>
              <li><a href="#">Golang</a></li>
              <li><a href="#">Datastructures</a></li>
              <li><a href="#">SystemDesign</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </nav>
        </figure>


        <main class="container">
          <input style={{ "height": "10%", width: "100%" }} type="text" id="firstname" name="firstname" placeholder="Search" required />
        </main>

        <main class="container">
          <details>
            <summary>Question1</summary>
            <p>Answer</p>
          </details>

          <details open>
            <summary>Question2</summary>
            <ul>
              <li>Answer</li>
              <li>
                <pre>
                <code>
                  fetch("http://example.com/movies.json").then((response) => response.json()).then((data) => console.log(data))
                </code>
              </pre>

              </li>
            </ul>
          </details>
        </main>
      </main>

    </div>
  );
}
