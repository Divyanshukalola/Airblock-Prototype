// Created By: Divyanshu Kalola
// Description: The file contains view of Profile
// Component List: [Team_side_nav,Team_footer]
// Things TODO: Add edit feature

import React, { useState, useEffect } from "react";

//componenets
import Project_title from "./Create_project_comp/Project_Title";
import Project_description from "./Create_project_comp/Project_description";
import Project_team from "./Create_project_comp/Project_team";
import Project_register from "./Create_project_comp/Project_register";
// icons
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsFillHddNetworkFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const Create_Projects = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function addProject(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  // Counter is a state initialized to 0
  const [count, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const onNext = () => {
    // Counter state is incremented
    if (count < 3) {
      setCounter(count + 1);
    }
  };

  const onBack = () => {
    // Counter state is incremented
    if (count > 0) {
      setCounter(count - 1);
    }
  };

  return (
    <>
      <div className="row mx-1">
        <div className="col">
          <div
            className="card my-1 bg-white shadow"
            style={{ borderRadius: "20px", border: "transparent" }}
          >
            <div className="card-body mx-2 mt-3">
              <div className="row">
                <div className="col-3">
                  {/* Type of Asset */}
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      backgroundColor: count == 0 ? "#F5F5F5" : "transparent",
                    }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <BsFillHandIndexThumbFill
                            style={{ fontSize: "25px" }}
                            className="mt-2"
                          ></BsFillHandIndexThumbFill>
                        </div>
                        <div className="col">
                          <h6 className="card-title">Title your Project</h6>
                          <p
                            className="card-text"
                            style={{ fontSize: "11px", color: "#B8B8B8" }}
                          >
                            Select the title.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  {/* Asset Description */}
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      backgroundColor: count == 1 ? "#F5F5F5" : "transparent",
                    }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <BsFillInfoSquareFill
                            style={{ fontSize: "25px" }}
                            className="mt-2"
                          ></BsFillInfoSquareFill>
                        </div>
                        <div className="col">
                          <h6 className="card-title">Project Description</h6>
                          <p
                            className="card-text"
                            style={{ fontSize: "11px", color: "#B8B8B8" }}
                          >
                            Describe your project
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  {/* Asset Description */}
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      backgroundColor: count == 2 ? "#F5F5F5" : "transparent",
                    }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <BsFillPersonFill
                            style={{ fontSize: "25px" }}
                            className="mt-2"
                          ></BsFillPersonFill>
                        </div>
                        <div className="col">
                          <h6 className="card-title">Add Team</h6>
                          <p
                            className="card-text"
                            style={{ fontSize: "11px", color: "#B8B8B8" }}
                          >
                            Select who works
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* Regsiter Asset */}
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      backgroundColor:
                        count == 3 || count > 3 ? "#F5F5F5" : "transparent",
                    }}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <BsFillHddNetworkFill
                            style={{ fontSize: "25px" }}
                            className="mt-2"
                          ></BsFillHddNetworkFill>
                        </div>
                        <div className="col">
                          <h6 className="card-title">Create Project</h6>
                          <p
                            className="card-text"
                            style={{ fontSize: "11px", color: "#B8B8B8" }}
                          >
                            Register the Project
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* Project Title */}
              {count == 0 ? <Project_title></Project_title> : null}
              {/* Project Description */}
              {count == 1 ? <Project_description></Project_description> : null}

              {/* Project Team */}
              {count == 2 ? <Project_team></Project_team> : null}
              {/* Project Team */}
              {count == 3 ? <Project_register></Project_register> : null}
              <hr />
              <div style={{ textAlign: "center" }}>
                <button
                  type="button"
                  className="btn btn-secondary mx-3"
                  onClick={onBack}
                >
                  Go Back
                </button>

                {count == 3 ? (
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onNext}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_Projects;
