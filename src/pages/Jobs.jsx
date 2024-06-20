import React, { useEffect, useState } from "react";
import Job from "../components/Job";
import "./Jobs.css";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/get`)
      .then((v) => v.json())
      .then((v) => setData(v));
  }, []);

  function searchHandler(e) {
    e.preventDefault();
    if (search.trim().length === 0) {
      return;
    }
    fetch(`${process.env.REACT_APP_URL}/get/${search}`)
      .then((v) => v.json())
      .then((v) => setData(v));
  }
  return (
    <>
      <p className="heading" style={{ marginBottom: "0px", fontSize: "45px" }}>
       Enter the Job Details
      </p>

      <div>
        <form
          className="search"
          onSubmit={searchHandler}
          style={{ flexDirection: "row", marginTop: "25px" }}
        >
          <input
            type="search"
            name="q"
            id="search"
            value={search}
            placeholder="Enter text to search"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
      <div className="job-list">
        {data.length ===0 ? <p className="heading" style={{ fontSize: "35px" }}>Job not found!</p>
        :
        data.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default Jobs;
