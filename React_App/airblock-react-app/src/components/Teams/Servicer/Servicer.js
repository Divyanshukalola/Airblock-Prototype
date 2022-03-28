// Created By: Divyanshu Kalola
// Description: The file contains view of Profile
// Component List: [Team_side_nav,Team_footer]
// Things TODO: Add edit feature

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

//componenets
import Team_side_nav_servicer from './Team_side_nav_servicer'
import Servicer_profile from './Servicer_profile'
import Servicer_team_dashboard from "./Servicer_team_dashboard";
import Team_footer from '../Team_footer'
import Servicer_dashboard from './Servicer_dashboard'
import Servicer_projects from './Servicer_projects'

// icons
import { BsSearch } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";
import Servicer_cal from "./Servicer_cal";

// import { BsFillGrid1X2Fill } from "react-icons/bs";

const Servicer = () => {
  const [view, setView] = useState("dashboard");

  return (
    <>
      {/* Servicer Team Dashboard  */}
      <div
        className="row"
        style={{
          backgroundColor: "rgb(246, 246, 250)",
          height: "100%",
          width: "auto",
        }}
      >
        <div className="col-2" style={{ backgroundColor: "white" }}>
          <Team_side_nav_servicer
            dashboard={view === "dashboard" ? "true" : "false"}
            team={view === "team" ? "true" : "false"}
            projects={view === "projects" ? "true" : "false"}
            document={view === "document" ? "true" : "false"}
            calendar={view === "calendar" ? "true" : "false"}
            setView={setView}
          ></Team_side_nav_servicer>
        </div>
        <div
          className="col-10"
          style={{
            backgroundColor: "rgb(246, 246, 250)",
            overflowY: "scroll",
            height: "100%",
          }}
        >
          <div
            className="row"
            style={{ backgroundColor: "rgba(255, 255, 255)" }}
          >
            <div className="col border">
              <div
                id="navbar_airblock"
                className="card "
                style={{ borderRadius: "0px" }}
              >
                <nav
                  className="navbar navbar-expand-lg navbar-light bg-transparent card"
                  style={{ border: "transparent" }}
                >
                  <div className="row my-2 container-fluid">
                    <div className="col">
                      {/* search bar */}
                      <div className="row">
                        <div className="col">
                          <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search name or ID ..."
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
                    <div
                      className="col-5 text-right "
                      style={{ textAlign: "right" }}
                    >
                      <span
                        id="date"
                        style={{
                          marginRight: "10px",
                          color: "rgb(145, 150, 153)",
                          fontWeight: "bolder",
                          fontSize: "small",
                        }}
                      ></span>

                      {/* bell  */}
                      <a
                        href="javascript:void(0)"
                        className="mx-4"
                        style={{
                          textDecoration: "none",
                          color: "rgb(145, 150, 153)",
                        }}
                      >
                        <BsFillBellFill
                          style={{ fontSize: "25px" }}
                        ></BsFillBellFill>
                      </a>

                      {/* name and image  */}
                      <a
                        href="javascript:void(0)"
                        style={{ textDecoration: "none" }}
                        onClick={() => setView("profile")}
                      >
                        <img
                          src="https://chrisreining.com/wp-content/uploads/2017/08/Chris-Reining-01-Square.jpg"
                          width="40"
                          className="rounded-circle border"
                          height="40"
                        />
                        <span
                          className="mx-3"
                          style={{ color: "black", color: "#757575" }}
                        >
                          Henry Colin
                        </span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {view == "dashboard" ? (
            <Servicer_dashboard setView={setView} />
          ) : null}
          {view == "team" ? <Servicer_team_dashboard /> : null}
          {view == "projects" ? <Servicer_projects /> : null}
          {view == "profile" ? <Servicer_profile /> : null}
          {view == "calendar" ? <Servicer_cal /> : null}

          {/* body content  */}
          {/* <Servicer_profile/> */}
          {/* <Servicer_team_dashboard/> */}
        </div>
      </div>
    </>
  );
};

export default Servicer