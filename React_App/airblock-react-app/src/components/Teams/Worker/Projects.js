import React, { useState } from "react";

//components
import Add_update from "./Add_update";

// Import DB
import Projects_sample_db from "./../../Data/DB_Projects.json";
import Servicer_sample_db from "./../../Data/DB_Servicer.json";
import Worker_sample_db from "./../../Data/DB_Worker.json";

import { BsFillPenFill } from "react-icons/bs";
import { BsFillSlashCircleFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
// import { BsFillCalendarCheckFill } from "react-icons/bs";

//bootstrap
import Modal from "react-bootstrap/Modal";

import CustomizedTimeline from "./../Common/TimeLine";

export default function Project() {
  const workers = Worker_sample_db[0].Worker;
  const projects = Projects_sample_db[0].projects;
  const Servicer = Servicer_sample_db[0].Servicer[0];

  //add update show
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [editUpdate, seteditUpdate] = useState({});

  function addUpdate(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const My_ID = "169"; // current worker's id

  let my_projects = [];

  for (let i = 0; i < projects.length; i++) {
    let check = false;

    for (let j = 0; j < projects[i].Workers.length; j++) {
      if (projects[i].Workers[j].Worker_ID == My_ID) {
        check = true;
      }
    }
    if (check) {
      my_projects.push(projects[i]);
      check = false;
    }
  }

  return (
    <div className="row">
      <div className="col">
        {my_projects.map((project, index) => {
          return (
            <div
              className="card mx-3 my-3 shadow"
              style={{ border: "transparent" }}
            >
              <div className="card-body mx-3 my-3">
                <div className="row">
                  <div className="col">
                    <p style={{ margin: "7px", fontSize: "25px" }}>
                      <b>
                        <b>Project Brief - #{project.Project_ID} </b>
                      </b>
                    </p>
                    <br />
                    <p style={{ margin: "7px" }}>
                      <b>
                        <b>Name: </b>
                      </b>
                      {project.Name}
                    </p>
                    <p style={{ margin: "7px" }}>
                      <b>
                        <b>Status: </b>
                      </b>
                      {project.Stage === "S1" ? "Stage 1" : null}
                      {project.Stage === "S2" ? "Stage 2" : null}
                      {project.Stage === "S3" ? "Stage 3" : null}
                      {project.Stage === "S4" ? "Stage 4" : null}
                    </p>
                    <p style={{ margin: "7px" }}>
                      <b>
                        <b>Project Started: </b>
                      </b>
                      {project.Start_date}
                    </p>
                    <p style={{ margin: "7px" }}>
                      <b>
                        <b>Project Managed By: </b>
                      </b>
                      {project.Managed_by}
                    </p>
                    <br />
                    <p style={{ margin: "7px" }}>
                      <b>
                        <b>Lastest Update: </b>
                      </b>
                      {project.Last_update}
                    </p>
                    <p style={{ margin: "7px" }}>
                      <b>
                        <b>Update Date: </b>
                      </b>
                      {project.Last_update_date}
                    </p>
                    <p style={{ margin: "7px" }}>
                      <b>
                        <b>Update Details: </b>
                      </b>
                      {project.Update_brief}
                    </p>
                  </div>
                  <div className="col-7">
                    <br />
                    <br />
                    <CustomizedTimeline
                      scheduled={project.Scheduled}
                      work_started={project.Work_started}
                      final_checks={project.Final_checks}
                      completed={project.Completed}
                      S1={
                        (project.Stage === "S1") |
                        (project.Stage === "S4") |
                        (project.Stage === "S2") |
                        (project.Stage === "S3")
                          ? "S1"
                          : null
                      }
                      S2={
                        (project.Stage === "S2") |
                        (project.Stage === "S4") |
                        (project.Stage === "S3")
                          ? "S2"
                          : null
                      }
                      S3={
                        (project.Stage === "S3") | (project.Stage === "S4")
                          ? "S3"
                          : null
                      }
                      S4={project.Stage === "S4" ? "S4" : null}
                    ></CustomizedTimeline>
                  </div>
                </div>
                <hr />
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add Update</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Add_update></Add_update>
                  </Modal.Body>
                </Modal>

                <div className="row">
                  <div className="row">
                    <div className="col-2">
                      <p>
                        <b> MY UPDATES</b>
                      </p>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search by Update ID or Name .."
                            aria-label="Search"
                          />
                        </div>
                        <div className="col-1 mt-1">
                          <a
                            href="javascript:void(0)"
                            style={{ color: "rgb(145, 150, 153)" }}
                          >
                            <BsSearch style={{ fontSize: "25px" }}></BsSearch>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="row text-right">
                        <div className="col text-center">
                          <a href="javascript:void(0)">
                            <button
                              type="button"
                              onClick={() => addUpdate(true)}
                              class="btn btn-secondary"
                            >
                              Add update
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div
                      className="card mx-2"
                      style={{ border: "transparent" }}
                    >
                      <div className="card-body  mx-3 mb-3">
                        <div
                          style={{
                            height: "600px",
                            overflow: "scroll",
                          }}
                        >
                          {project.Updates.map((update, index) => {
                            return (
                              <>
                                {update.mark === "show" ? (
                                  <div
                                    className="card mx-2 mb-3"
                                    key={update.Update_ID}
                                  >
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col mt-2 mb-2">
                                          <p
                                            style={{
                                              margin: "0",
                                              fontSize: "20px",
                                            }}
                                          >
                                            Update ID #{update.Update_ID}
                                          </p>
                                          <br />
                                          <p style={{ margin: "0" }}>
                                            <b>Update Brief: </b>
                                            {update.Brief}
                                          </p>
                                          <p style={{ margin: "0" }}>
                                            <b>Update Date: </b>
                                            {update.Date}
                                          </p>
                                          <p style={{ margin: "0" }}>
                                            <b>Update Created By: </b>
                                            {update.Update_by}
                                          </p>
                                        </div>
                                        <div className="col mt-2">
                                          <div className="card-group">
                                            {update.Supporting_doc.map(
                                              (doc, index) => {
                                                return (
                                                  <>
                                                    <div className="card">
                                                      <a
                                                        href="javascript:void(0)"
                                                        style={{
                                                          textDecoration:
                                                            "none",
                                                          color: "black",
                                                        }}
                                                      >
                                                        {doc.Type === "img" ? (
                                                          <img
                                                            className="card-img-top"
                                                            src={doc.URL}
                                                            alt="Card image cap"
                                                          />
                                                        ) : (
                                                          <iframe
                                                            class="card-img-top"
                                                            src={doc.URL}
                                                          ></iframe>
                                                        )}
                                                        <div className="card-body">
                                                          <h5 className="card-title">
                                                            {doc.Title}
                                                          </h5>
                                                          <p className="card-text">
                                                            {doc.Description}
                                                          </p>
                                                        </div>
                                                      </a>
                                                    </div>
                                                  </>
                                                );
                                              }
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row mx-3 text-center">
                                        <div className="col text-center">
                                          <a
                                            href="javascript:void(0)"
                                            style={{
                                              textDecoration: "none",
                                              color: "black",
                                            }}
                                          >
                                            <BsFillPenFill
                                              style={{ fontSize: "18px" }}
                                            ></BsFillPenFill>
                                            <br />
                                            Edit Update
                                          </a>
                                        </div>

                                        <div className="col text-center">
                                          {" "}
                                          <a
                                            href="javascript:void(0)"
                                            style={{
                                              textDecoration: "none",
                                              color: "black",
                                            }}
                                          >
                                            <BsFillPlusCircleFill
                                              style={{ fontSize: "18px" }}
                                            ></BsFillPlusCircleFill>
                                            <br />
                                            Add Image
                                          </a>
                                        </div>
                                        <div className="col text-center">
                                          {" "}
                                          <a
                                            href="javascript:void(0)"
                                            style={{
                                              textDecoration: "none",
                                              color: "red",
                                            }}
                                          >
                                            <BsFillSlashCircleFill
                                              style={{ fontSize: "18px" }}
                                            ></BsFillSlashCircleFill>
                                            <br />
                                            Delete Update
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="row mb-3">
                    <div className="col-2">
                      {" "}
                      <p>
                        <b> MY COLLEAGUES</b>
                      </p>
                    </div>

                    <div className="col-6">
                      <div className="row">
                        <div className="col">
                          <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search by Update ID or Name .."
                            aria-label="Search"
                          />
                        </div>
                        <div className="col-1 mt-1">
                          <a
                            href="javascript:void(0)"
                            style={{ color: "rgb(145, 150, 153)" }}
                          >
                            <BsSearch style={{ fontSize: "25px" }}></BsSearch>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card mx-2">
                      <div className="card-body  mx-3 mb-3">
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
                              <div className="col">
                                <p style={{ margin: "0" }}>Phone Number:</p>
                              </div>
                            </div>
                          </b>
                        </b>

                        <hr />

                        <div
                          style={{
                            height: "250px",
                            overflow: "scroll",
                          }}
                        >
                          {project.Workers.map((worker, index) => {
                            return (
                              <div className="card mx-2 mb-3">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-2">
                                      <img
                                        src={
                                          workers.find(
                                            (workers) =>
                                              worker.Worker_ID ===
                                              workers.Worker_ID
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
                                              worker.Worker_ID ===
                                              workers.Worker_ID
                                          ).first_name
                                        }{" "}
                                        {
                                          workers.find(
                                            (workers) =>
                                              worker.Worker_ID ===
                                              workers.Worker_ID
                                          ).last_name
                                        }{" "}
                                        #{worker.Worker_ID}
                                      </p>
                                    </div>
                                    <div className="col mt-2 text-center">
                                      <p style={{ margin: "0" }}>
                                        {
                                          workers.find(
                                            (workers) =>
                                              worker.Worker_ID ===
                                              workers.Worker_ID
                                          ).email
                                        }
                                      </p>
                                    </div>
                                    <div className="col mt-2">
                                      <p style={{ margin: "0" }}>
                                        {
                                          workers.find(
                                            (workers) =>
                                              worker.Worker_ID ===
                                              workers.Worker_ID
                                          ).phone_number
                                        }
                                      </p>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
