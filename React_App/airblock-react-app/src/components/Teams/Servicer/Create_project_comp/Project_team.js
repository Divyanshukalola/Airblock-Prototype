// Created By: Divyanshu Kalola
// Description: The file contains view of Profile
// Component List: [Team_side_nav,Team_footer]
// Things TODO: Add edit feature

import React, { useState, useEffect } from "react";

// icons
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsFillHddNetworkFill } from "react-icons/bs";
// import { BsFillGrid1X2Fill } from "react-icons/bs";

const Project_team = () => {
  return (
    <>
      {" "}
      <div className="row">
        <div className="col">
          {" "}
          <div class="form-group">
            <label className="mb-2">
              <b>Search Worker: </b>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Search by Worker's ID ... "
            />
            <small class="form-text text-muted">
              Describe your project here.
            </small>
          </div>
          <br />
          <button type="button" class="btn btn-primary">
            Add Worker
          </button>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p>
                <b>Team:</b>{" "}
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body text-center" style={{ color: "lightgrey" }}>
              You will see the team members added here!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_team;
