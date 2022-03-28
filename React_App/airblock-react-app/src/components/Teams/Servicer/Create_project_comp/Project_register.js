// Created By: Divyanshu Kalola
// Description: The file contains view of Profile
// Component List: [Team_side_nav,Team_footer]
// Things TODO: Add edit feature

import React, { useState, useEffect } from "react";

// icons
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsFillHddNetworkFill } from "react-icons/bs";
import { BsCheck2All } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
// import { BsFillGrid1X2Fill } from "react-icons/bs";
import CustomizedTimeline from "../../Common/TimeLine";

const Project_register = () => {
  return (
    <>
      {" "}
      <div className="card mx-3 my-3 shadow" style={{ border: "transparent" }}>
        <div className="card-body mx-3 my-3">
          <div className="row">
            <div className="col">
              <p style={{ margin: "7px", fontSize: "25px" }}>
                <b>
                  <b>Project Brief - #XYZ </b>
                </b>
              </p>
              <br />
              <p style={{ margin: "7px" }}>
                <b>
                  <b>Name: </b>
                </b>
                XYZ
              </p>
              <p style={{ margin: "7px" }}>
                <b>
                  <b>Status: </b>
                </b>
                XYZ
              </p>
              <p style={{ margin: "7px" }}>
                <b>
                  <b>Project Started: </b>
                </b>
                XYZ
              </p>
              <p style={{ margin: "7px" }}>
                <b>
                  <b>Project Managed By: </b>
                </b>
                XYZ
              </p>
              <br />
              <p style={{ margin: "7px" }}>
                <b>
                  <b>Lastest Update: </b>
                </b>
                XYZ
              </p>
              <p style={{ margin: "7px" }}>
                <b>
                  <b>Update Date: </b>
                </b>
                XYZ
              </p>
              <p style={{ margin: "7px" }}>
                <b>
                  <b>Update Details: </b>
                </b>
                XYZ
              </p>
            </div>
            <div className="col-7">
              <br />
              <br />
              <CustomizedTimeline></CustomizedTimeline>
            </div>
          </div>
          <hr />

          <br />
          <div className="row">
            <div className="row mb-3">
              <div className="col-2">
                <p>
                  <b> MY TEAM</b>
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
                    {/* {project.Workers.map((worker, index) => {
                      return (
                        <div className="card mx-2 mb-3">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-2">
                                <img
                                  src={
                                    obj2.find(
                                      (obj2) =>
                                        worker.Worker_ID === obj2.Worker_ID
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
                                    obj2.find(
                                      (obj2) =>
                                        worker.Worker_ID === obj2.Worker_ID
                                    ).first_name
                                  }{" "}
                                  {
                                    obj2.find(
                                      (obj2) =>
                                        worker.Worker_ID === obj2.Worker_ID
                                    ).last_name
                                  }{" "}
                                  #{worker.Worker_ID}
                                </p>
                              </div>
                              <div className="col mt-2 text-center">
                                <p style={{ margin: "0" }}>
                                  {
                                    obj2.find(
                                      (obj2) =>
                                        worker.Worker_ID === obj2.Worker_ID
                                    ).email
                                  }
                                </p>
                              </div>
                              <div className="col mt-2">
                                <p style={{ margin: "0" }}>
                                  {
                                    obj2.find(
                                      (obj2) =>
                                        worker.Worker_ID === obj2.Worker_ID
                                    ).phone_number
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_register;
