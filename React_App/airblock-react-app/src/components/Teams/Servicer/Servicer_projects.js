// Created By: Divyanshu Kalola
// Description: The file contains view of Profile
// Component List: [Team_side_nav,Team_footer]
// Things TODO: Add edit feature

import React, { useState, useEffect } from "react";

//componenets
import Team_side_nav from './Team_side_nav_servicer'
import Team_footer from '../Team_footer'
import Project from './Projects'
import Create_Projects from "./Create_Projects";

//bootstrap
import Modal from "react-bootstrap/Modal";

// icons
import { BsFillDiagram2Fill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";

// import { BsFillGrid1X2Fill } from "react-icons/bs";

//material UI
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

const Servicer_projects = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function addProject(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      {/* Servicer Team Dashboard  */}
      <div style={{ backgroundColor: "rgb(246, 246, 250)", height: "100%" }}>
        <div className="container mt-5" style={{ fontWeight: "bolder" }}>
          <div className="row">
            <div className="col">
              <h3>Projects</h3>
            </div>
            <div className="col-3 text-center">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={addProject}
              >
                Create New Project
                <BsFillDiagram2Fill
                  className="mx-2"
                  style={{ fontSize: "20px" }}
                ></BsFillDiagram2Fill>
              </button>
            </div>
          </div>
        </div>

        <Project></Project>

        <Team_footer></Team_footer>
      </div>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Create_Projects></Create_Projects>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Servicer_projects