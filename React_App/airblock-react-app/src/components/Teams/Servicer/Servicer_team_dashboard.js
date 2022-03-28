import React, { useState, useEffect } from "react";

//componenets
import Team_side_nav from './Team_side_nav_servicer'
import Team_footer from '../Team_footer'

// database
import Projects_sample_db from "./../../Data/DB_Projects.json";
import Worker_sample_db from "./../../Data/DB_Worker.json";
import Servicer_sample_db from "./../../Data/DB_Servicer.json";

// icons
import { BsSearch } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";

// import { BsFillGrid1X2Fill } from "react-icons/bs";



const Servicer_team_dashboard = () => {

    const workers = Worker_sample_db[0].Worker;
    const projects = Projects_sample_db[0].projects;
    const Servicer = Servicer_sample_db[0].Servicer[0];

    let Team = [];

    for (let i = 0; i < Servicer.Team.length; i++) {
        const obj = workers.find(
          (workers) => workers.Worker_ID === Servicer.Team[i].Worker_ID
        );

      Team.push(obj);
    }
    

  return (
    <>
      {/* Servicer Team Dashboard  */}
      <div style={{ backgroundColor: "rgb(246, 246, 250)", height: "100%" }}>
        <div className="container mt-5" style={{ fontWeight: "bolder" }}>
          <h3>Teams</h3>
        </div>

        <div
          className="card mt-3 border"
          style={{ backgroundColor: "rgb(252, 252, 255)" }}
        >
          <div className="body">
            <div className="row">
              <div className="col" style={{height:'500px',overflow:"scroll"}}>
                {Team.map(
                  (worker, index) => {
                    return (
                      <div className="card mx-3 my-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-2">
                              <img
                                            src={ worker.img}
                                height="70"
                                width="70"
                                style={{ borderRadius: "50%" }}
                                alt=""
                              />
                            </div>
                            <div className="col">
                                        <p style={{ margin: "0" }}>{worker.first_name} {worker.last_name} #{ worker.Worker_ID}</p>
                              <small>
                                            <b>Email:</b> { worker.email}
                              </small>
                              <p style={{ margin: "0" }}></p>
                              <small>
                                {" "}
                                            <b>Phone Number:</b> { worker.phone_number}
                              </small>
                            </div>
                            <div className="col">
                              <br />
                              <small>
                                <b> Hiring Date:</b> {worker.hiring_date}
                               
                              </small>
                              <p style={{ margin: "0" }}></p>
                              <small>
                                <b>Location: </b>{worker.work_location}
                              
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <Team_footer></Team_footer>
      </div>
    </>
  );
}

export default Servicer_team_dashboard