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

import Team_footer from "../Team_footer";

// icons
import { BsSearch } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { BsFillPuzzleFill } from "react-icons/bs";
import { BsFillBrightnessLowFill } from "react-icons/bs";

// import { BsFillGrid1X2Fill } from "react-icons/bs";

const Servicer_dashboard = ({ setView }) => {
  const navigate = useNavigate();
  const workers = Worker_sample_db[0].Worker;
  const projects = Projects_sample_db[0].projects;
  const Servicer = Servicer_sample_db[0].Servicer[0];

  const My_ID = "169"; // current worker's id

  let days_worked = 0;
  let projects_worked = 0;
  let projects_worked_completed = 0;
  let projects_worked_ongoing = 0;
  let my_projects = [];
  let my_colleagues = [];

  for (let i = 0; i < projects.length; i++) {
    let check = false;
    let project_days = 0;

    for (let j = 0; j < projects[i].Updates.length; j++) {
      if (projects[i].Updates[j].Update_worker_ID == My_ID) {
        var start = new Date(projects[i].Updates[j].Start_Date);
        var end = new Date(projects[i].Updates[j].End_Date);
        var Difference_In_Time = end.getTime() - start.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        days_worked += Difference_In_Days;
        project_days += Difference_In_Days;
      }
    }

    for (let j = 0; j < projects[i].Workers.length; j++) {
      if (projects[i].Workers[j].Worker_ID == My_ID) {
        check = true;
      }
    }

    if (check) {
      projects_worked++;

      my_projects.push([projects[i], project_days]);

      if (projects[i].Status == "completed") {
        projects_worked_completed++;
      }
      if (projects[i].Status == "ongoing") {
        projects_worked_ongoing++;
      }

      for (let x = 0; x < projects[i].Workers.length; x++) {
        my_colleagues.push(projects[i].Workers[x].Worker_ID);
      }
      my_colleagues = [...new Set(my_colleagues)];
      project_days = 0;
      check = false;
    }
  }

  return (
    <>
      {/* Servicer Team Dashboard  */}
      <div style={{ backgroundColor: "rgb(246, 246, 250)", height: "100%" }}>
        <div className="container mt-5" style={{ fontWeight: "bolder" }}>
          <h3>Dashboard </h3>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="card mx-2 shadow" style={{ border: "transparent" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col mt-1 text-center mx-3">
                    <h6 className="card-title"># Days Worked</h6>

                    <h3 className="card-text" style={{ color: "black" }}>
                      {days_worked}
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
                      <BsFillBrightnessLowFill
                        style={{
                          color: "white",
                          fontSize: "28px",
                          top: "20%",
                          position: "relative",
                        }}
                      ></BsFillBrightnessLowFill>
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
                    <h6 className="card-title">Total Projects</h6>
                    <h3 className="card-text" style={{ color: "black" }}>
                      {projects_worked}
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
                    <h6 className="card-title">Projects Completed</h6>
                    <h3 className="card-text" style={{ color: "black" }}>
                      {projects_worked_completed}
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
                    <h6 className="card-title">Projects Ongoing</h6>
                    <h3 className="card-text" style={{ color: "black" }}>
                      {projects_worked_ongoing}
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
                        <p style={{ margin: "0" }}>Number of days working:</p>
                      </div>
                    </div>
                  </b>
                </b>

                <hr />

                <div style={{ height: "200px", overflow: "scroll" }}>
                  {my_projects.map((project, index) => {
                    return (
                      <div
                        className="card mx-2 mb-3 nav-verticle"
                        onClick={() => setView("projects")}
                      >
                        <div className="card-body">
                          <div className="row">
                            <div className="col-2">
                              <p style={{ margin: "0" }}>
                                #{project[0].Project_ID}
                              </p>
                            </div>
                            <div className="col  ">
                              <p style={{ margin: "0" }}>{project[0].Name}</p>
                            </div>
                            <div className="col-3 text-center ">
                              <small> {project[0].Stage}</small>
                            </div>
                            <div className="col-3 text-center ">
                              {project[1]}
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
                <p style={{ fontWeight: "bolder", marginBottom: "0" }}>
                  MY COLLEAGUES
                </p>
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
                      <div className="col text-center">
                        <p style={{ margin: "0" }}>Email:</p>
                      </div>
                      <div className="col text-right">
                        <p style={{ margin: "0" }}>Phone Number:</p>
                      </div>
                    </div>
                  </b>
                </b>

                <hr />

                <div style={{ height: "250px", overflow: "scroll" }}>
                  {my_colleagues.map((colleagues, index) => {
                    return (
                      <div className="card mx-2 mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-2">
                              <img
                                src={
                                  workers.find(
                                    (workers) =>
                                      colleagues === workers.Worker_ID
                                  ).img
                                }
                                height="50"
                                width="50"
                                style={{ borderRadius: "50%" }}
                                alt=""
                              />
                            </div>
                            <div className="col-2 mt-2">
                              <p style={{ margin: "0" }}>
                                {
                                  workers.find(
                                    (workers) =>
                                      colleagues === workers.Worker_ID
                                  ).first_name
                                }{" "}
                                {
                                  workers.find(
                                    (workers) =>
                                      colleagues === workers.Worker_ID
                                  ).last_name
                                }{" "}
                                #{" "}
                                {
                                  workers.find(
                                    (workers) =>
                                      colleagues === workers.Worker_ID
                                  ).Worker_ID
                                }
                              </p>
                            </div>
                            <div className="col mt-2 text-center">
                              <small>
                                {
                                  workers.find(
                                    (workers) =>
                                      colleagues === workers.Worker_ID
                                  ).email
                                }
                              </small>
                            </div>
                            <div className="col mt-2 text-right">
                              <small>
                                {
                                  workers.find(
                                    (workers) =>
                                      colleagues === workers.Worker_ID
                                  ).phone_number
                                }
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
};;

export default Servicer_dashboard;
