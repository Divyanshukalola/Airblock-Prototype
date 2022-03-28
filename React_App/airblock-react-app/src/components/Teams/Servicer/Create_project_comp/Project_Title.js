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

const Project_title = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          {" "}
          <div class="form-group">
            <label className="mb-2">
              <b>Title: </b>
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Title ..."
            />
            <small class="form-text text-muted">
              Select a good title of your project.
            </small>
          </div>
        </div>
        <div className="col">
          {" "}
          <div class="form-group">
            <label className="mb-2">
              <b>Project started on: </b>
            </label>
            <input type="text" class="form-control" placeholder="MM/DD/YYYY" />
            <small class="form-text text-muted">
              Select the date you started working on the project.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_title;
