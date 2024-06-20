import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="App-header">
        <p className="heading">
          My Job Portal 
        </p>
        <Link className="App-link" to="/jobs">
          Click here!!
        </Link>
      </header>
    </>
  );
};

export default Home;
