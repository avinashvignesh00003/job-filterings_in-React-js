"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Job = {
  id: number;
  logo: string;
  company: string;
  role: string;
  position: string;
  new: boolean;
  featured: boolean;
  level: string;
  postedAt: number;
  contract: string;
  location: string;
  languages: string[];
  tools: string;
};

const Page = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filter, setFilter] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handlefilter = (lang: string) => {
    if (filter.includes(lang)) {
      setFilter(filter.filter((item) => item !== lang));
    } else {
      setFilter([...filter, lang]);
    }
  };

  const filteredJobs =
    filter.length === 0
      ? jobs
      : jobs.filter((job) => filter.every((f) => job.languages.includes(f)));

  return (
    <>
      <Image
        src="/images/bg-header-desktop.svg"
        alt="logo"
        width={1}
        height={1}
      />
      <h1 className="com10"> Welcome to job market</h1>
      <div
        className="card   h-100 mb-4 w-100 mt-5"
        style={{ maxWidth: "100%" }}
      >
        {filter.length > 0 && (
          <div className="p-4">
            <span className="hp0">{filter}</span>
            <button
              className="ms-3"
              style={{ border: "0" }}
              onClick={() => setFilter([])}
            >
              Clear✌️
            </button>
          </div>
        )}

        {filteredJobs.map((job, index) => (
          <div key={index} className="jobs">
            <Image
              className="img-fluid snap "
              width={100}
              height={100}
              src={job.logo}
              alt="logo2"
              style={{ width: "8rem", height: "8rem" }}
            />

            <div className="col-md-8">
              <h3 className="com ">{job.company}</h3>

              <p className="mt-3">{job.postedAt}</p>
              <p className="mt-3">{job.contract}</p>
              <p className="mt-3 ">{job.location}</p>
              <p className="mt-3 hp1">{job.role}</p>
              {/* <p className="ml-2  sp10">{job.languages}</p> */}
              <div className="mt-3 hp0">
                {job.languages.map((lang, i) => (
                  <button key={i} style={{border:"0"}} onClick={()=>handlefilter(lang)}>
                  <p className="ml-2   sp10"
                 key={i}>{lang}</p>

</button>
  
      
                ))}
              </div>
            </div>
            {/* </center> */}
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <h3 className="text-center mt-3">No jobs found!</h3>
        )}
      </div>
    </>
  );
};

export default Page;

//     "id": 4,
//     "company": "MyHome",
//     "logo": "./images/myhome.svg",
//     "new": false,
//     "featured": false,
//     "position": "Junior Frontend Developer",
//     "role": "Frontend",
//     "level": "Junior",
//     "postedAt": "5d ago",
//     "contract": "Contract",
//     "location": "USA Only",
//     "languages": ["CSS", "JavaScript"],
//     "tools": []
//
