// Created By: Divyanshu Kalola
// Description: The file contains view of Profile
// Component List: [Team_side_nav,Team_footer]
// Things TODO: Add edit feature

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import DB
import Projects_sample_db from "./../../Data/DB_Projects.json";
import Servicer_sample_db from "./../../Data/DB_Servicer.json";
import Worker_sample_db from "./../../Data/DB_Worker.json";

//componenets
import Team_side_nav from "./Team_side_nav_servicer";
import Team_footer from "../Team_footer";

// icons
import { BsSearch } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { BsFillPuzzleFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

// import { BsFillGrid1X2Fill } from "react-icons/bs";

const Servicer_dashboard = ({ setView }) => {
  const navigate = useNavigate();

  const workers = Worker_sample_db[0].Worker;
  const projects = Projects_sample_db[0].projects;
  const Servicer = Servicer_sample_db[0].Servicer[0];

  let compelted_count = 0;
  let ongoing_count = 0;
  let team_servicer = [];
  let projects_servicer = [];

  for (let i = 0; i < Servicer.Projects.length; i++) {
    const obj = projects.find(
      (projects) => projects.Project_ID === Servicer.Projects[i].Project_ID
    );
    console.log(obj);
    if (obj.Status == "completed") {
      compelted_count++;
    }
    if (obj.Status == "ongoing") {
      ongoing_count++;
    }
  }

  for (let i = 0; i < Servicer.Team.length; i++) {
    const obj = workers.find(
      (workers) => workers.Worker_ID === Servicer.Team[i].Worker_ID
    );

    team_servicer.push(obj);
  }

  for (let i = 0; i < Servicer.Projects.length; i++) {
    const obj = projects.find(
      (projects) => projects.Project_ID === Servicer.Projects[i].Project_ID
    );

    projects_servicer.push(obj);
  }

  return (
    <>
      {/* Servicer Team Dashboard  */}
      <div style={{ backgroundColor: "rgb(246, 246, 250)", height: "100%" }}>
        <div className="container mt-5" style={{ fontWeight: "bolder" }}>
          <h3>Dashboard</h3>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="card mx-2 shadow" style={{ border: "transparent" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col mt-1 text-center mx-3">
                    <h6 className="card-title">Workers</h6>

                    <h3 className="card-text" style={{ color: "black" }}>
                      {Servicer.Team.length}
                    </h3>
                  </div>
                  <div className="col-4  text-center mt-1">
                    <div
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#0061CA",
                      }}
                    >
                      <BsFillPersonFill
                        style={{
                          color: "white",
                          fontSize: "28px",
                          top: "20%",
                          position: "relative",
                        }}
                      ></BsFillPersonFill>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mx-2 shadow" style={{ border: "transparent" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col mt-1 text-center">
                    <h6 className="card-title">Projects</h6>
                    <h3 className="card-text" style={{ color: "black" }}>
                      {Servicer.Projects.length}
                    </h3>
                  </div>
                  <div className="col-4  text-center mt-1">
                    <div
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#339F66",
                      }}
                    >
                      <BsFillPuzzleFill
                        style={{
                          color: "white",
                          fontSize: "28px",
                          top: "20%",
                          position: "relative",
                        }}
                      ></BsFillPuzzleFill>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mx-2 shadow" style={{ border: "transparent" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col mt-1 text-center">
                    <h6 className="card-title">Completed</h6>
                    <h3 className="card-text" style={{ color: "black" }}>
                      {compelted_count}
                    </h3>
                  </div>
                  <div className="col-4  text-center mt-1">
                    <div
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#DFDE17",
                      }}
                    >
                      <BsFillFileEarmarkCheckFill
                        style={{
                          color: "white",
                          fontSize: "28px",
                          top: "20%",
                          position: "relative",
                        }}
                      ></BsFillFileEarmarkCheckFill>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mx-2 shadow" style={{ border: "transparent" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col mt-1 text-center">
                    <h6 className="card-title">Ongoing</h6>
                    <h3 className="card-text" style={{ color: "black" }}>
                      {ongoing_count}
                    </h3>
                  </div>
                  <div className="col-4  text-center mt-1">
                    <div
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#7917DF",
                      }}
                    >
                      <BsFillClockFill
                        style={{
                          color: "white",
                          fontSize: "28px",
                          top: "20%",
                          position: "relative",
                        }}
                      ></BsFillClockFill>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="card mx-2 shadow" style={{ border: "transparent" }}>
              <div className="card-title mt-4 mx-4">
                <p style={{ fontWeight: "bolder", marginBottom: "0" }}>
                  MY PROJECTS
                </p>
              </div>
              <div className="card-body  mx-3 mb-3">
                <hr />
                <b>
                  <b>
                    <div className="row mx-2">
                      <div className="col-2">
                        <p style={{ margin: "0" }}>Project ID:</p>
                      </div>
                      <div className="col">
                        <p style={{ margin: "0" }}>Project Name:</p>
                      </div>
                      <div className="col-3 text-center">
                        <p style={{ margin: "0" }}>Project Status:</p>
                      </div>
                      <div className="col-3">
                        <p style={{ margin: "0" }}>
                          Number of Workers working:
                        </p>
                      </div>
                    </div>
                  </b>
                </b>

                <hr />

                <div style={{ height: "200px", overflow: "scroll" }}>
                  {projects_servicer.map((project, index) => {
                    return (
                      <div
                        className="card mx-2 mb-3 nav-verticle"
                        onClick={() => setView("projects")}
                      >
                        <div className="card-body">
                          <div className="row">
                            <div className="col-2">
                              <p style={{ margin: "0" }}>
                                #{project.Project_ID}
                              </p>
                            </div>
                            <div className="col  ">
                              <p style={{ margin: "0" }}>{project.Name}</p>
                            </div>
                            <div className="col-3 text-center ">
                              <small>{project.Status}</small>
                            </div>
                            <div className="col-3 text-center ">
                              {project.Workers.length}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="card mx-2 shadow" style={{ border: "transparent" }}>
              <div className="card-title mt-4 mx-4">
                <p style={{ fontWeight: "bolder", marginBottom: "0" }}>TEAM</p>
              </div>

              <div className="card-body  mx-3 mb-3">
                <hr />
                <b>
                  <b>
                    <div className="row mx-2">
                      <div className="col-2"></div>
                      <div className="col-2">
                        <p style={{ margin: "0" }}>Name:</p>
                      </div>
                      <div className="col">
                        <p style={{ margin: "0" }}>Working on:</p>
                      </div>
                      <div className="col">
                        <p style={{ margin: "0" }}>Status:</p>
                      </div>
                    </div>
                  </b>
                </b>

                <hr />

                <div style={{ height: "250px", overflow: "scroll" }}>
                  {team_servicer.map((worker, index) => {
                    return (
                      <div className="card mx-2 mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-2">
                              <img
                                src={worker.img}
                                height="50"
                                width="50"
                                style={{ borderRadius: "50%" }}
                                alt=""
                              />
                            </div>
                            <div className="col-2 mt-2">
                              <p style={{ margin: "0" }}>
                                {worker.first_name} {worker.last_name} #
                                {worker.Worker_ID}
                              </p>
                            </div>
                            <div className="col mt-2">
                              <small>
                                <b>Working on:</b>{" "}
                                {worker.about_project === "null"
                                  ? "Project description not available!"
                                  : worker.about_project}
                              </small>
                            </div>
                            <div className="col mt-2">
                              <small>
                                <b> Update status: </b>
                                {worker.project_status === "null" ? (
                                  " Status not avaiable"
                                ) : (
                                  <a href="javascript:void(0)">
                                    worker.project_status
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ color: "#757575" }}
                                      width="15"
                                      height="15"
                                      fill="currentColor"
                                      className="bi bi-hourglass-split"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                                    </svg>
                                  </a>
                                )}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <Team_footer></Team_footer>
      </div>
    </>
  );
};

export default Servicer_dashboard