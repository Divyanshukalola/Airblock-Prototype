// Created By: Divyanshu Kalola
// Description: The file contains view of Profile
// Component List: [Team_side_nav,Team_footer]
// Things TODO: Add edit feature

import React, { useState, useEffect } from "react";

//componenets

import Team_footer from "../Team_footer";
import Calendar from "./../../calendar";

// icons
import { BsSearch } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { BsFillPuzzleFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

// import { BsFillGrid1X2Fill } from "react-icons/bs";

const Servicer_cal = () => {
  return (
    <>
      {/* Servicer Team Dashboard  */}
      <div style={{ backgroundColor: "rgb(246, 246, 250)", height: "100%" }}>
        <div className="container mt-5" style={{ fontWeight: "bolder" }}>
          <h3>Calendar</h3>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <Calendar></Calendar>
          </div>
        </div>

        <br />
        <Team_footer></Team_footer>
      </div>
    </>
  );
};

export default Servicer_cal;
