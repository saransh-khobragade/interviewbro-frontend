import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
     <main className="container">
        <figure>
          <nav>
            <ul>
              <li><a href="/"><strong>InterviewBro</strong></a></li>
            </ul>
            <ul>
              <li><Link to={`questions/javascript`}>Javascript</Link></li>
              <li><Link to={`questions/golang`}>Golang</Link></li>
              <li><Link to={`blog`}>Datastructures</Link></li>
              <li><a href="#">SystemDesign</a></li>
              <li><a href="">Projects</a></li>
            </ul>
          </nav>
        </figure>

        <Outlet/>
      
      </main>

    </div>
  );
}

export default Home;
