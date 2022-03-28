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

const Project_description = () => {
  return (
    <>
      {" "}
      <div className="row">
        <div className="col">
          {" "}
          <div class="form-group">
            <label className="mb-2">
              <b>Project Description/Brief: </b>
            </label>
            <textarea class="form-control" rows="3"></textarea>
            <small class="form-text text-muted">
              Describe your project here.
            </small>
          </div>
        </div>
        <div className="col">
          <div class="form-group">
            <label className="mb-2">
              <b>Project Status: </b>
            </label>
            <select class="form-control">
              <option value="S1">Stage 1 (Scheduled)</option>
              <option value="S2">Stage 2 (Work Commenced)</option>
              <option value="S3">Stage 3 (Final Checks)</option>
              <option value="S4">Stage 4 (Completed)</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          {" "}
          <div class="form-group">
            <label className="mb-2">
              <b>Project Scheduled Date: </b>
            </label>
            <input type="text" class="form-control" placeholder="MM/DD/YYYY" />
            <small class="form-text text-muted">
              Enter the date when the project was Scheduled to start.
            </small>
          </div>
        </div>
        <div className="col">
          {" "}
          <div class="form-group">
            <label className="mb-2">
              <b>Work Commenced: </b>
            </label>
            <input type="text" class="form-control" placeholder="MM/DD/YYYY" />
            <small class="form-text text-muted">
              Enter the date when the project's work will start.
            </small>
          </div>
        </div>
        <div className="col">
          {" "}
          <div class="form-group">
            <label className="mb-2">
              <b>Final Checks: </b>
            </label>
            <input type="text" class="form-control" placeholder="MM/DD/YYYY" />
            <small class="form-text text-muted">
              Enter the expected date when the project's Final Checks Commenced.
            </small>
          </div>
        </div>
        <div className="col">
          {" "}
          <div class="form-group">
            <label className="mb-2">
              <b>Project Completion Date: </b>
            </label>
            <input type="text" class="form-control" placeholder="MM/DD/YYYY" />
            <small class="form-text text-muted">
              Enter the expected date when the project will be completed.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_description;
