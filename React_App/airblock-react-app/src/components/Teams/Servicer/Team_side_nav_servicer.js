import React, { useState, useEffect } from "react";



// icons
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsFillDiagram2Fill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";

import { BsFillHddStackFill } from "react-icons/bs";



const Team_side_nav_servicer = (props) => {

    const styleTag = {backgroundImage: 'linear-gradient(to right, rgba(154, 189, 255, 0.199) 1%, rgba(255, 255, 255, 0.13) 99%)', borderLeftStyle: 'solid', borderLeftColor:'rgba(0, 89, 255, 0.74)'};
    

    console.log(props);

    

  return (
    <>
        {/* Servicer Team Side Nav  */}

                <div className="card sticky-top" style={{height: '100vh', borderColor: 'transparent'}}>

                <div className="body">

                    <div className="container text-center my-3">
                        <a className="navbar-brand" href="#">
                            <img src={require('../../../static/img/cube.png')} width="70" height="70" alt=""/>
                        </a>
                    </div>

                    <br/><br/>

                    <div className="container text-center ">
                        <a href="javascript:void(0)">
                            <button type="button" className="btn btn-primary shadow" >Add worker</button>
                        </a>
                    </div>


                    <br/><br/>
                    <a href="javascript:void(0)" onClick={() => props.setView( "dashboard")}  style={{textDecoration:'none' , color:'black'}}>
                        <div className="container  nav-verticle" style={props.dashboard == 'true'?styleTag:null} >
                        <div className="card" style={{borderColor: 'transparent', backgroundColor: 'transparent', height: '60px'}}>
                            <div className="container mt-3" style={{fontWeight: 'bolder', color: '#757575'}}>
                                    <div className="row">
                                        <div className="col-1">
                                             <BsFillGrid1X2Fill></BsFillGrid1X2Fill>
                                        </div>
                                        <div className="col">
                                            Dashboard 
                                        </div>
                                    </div>
                                   
                              
                            </div>
                          </div>
                    </div>
                    </a>
                    
                    <br/>
                    <a href="javascript:void(0)" onClick={() => props.setView( "projects")} style={{textDecoration:'none', color: '#757575'}}>
                         <div className="container  nav-verticle" style={props.projects == 'true'?styleTag:null}>
                        <div className="card" style={{borderColor: 'transparent', backgroundColor: 'transparent', height: '60px'}}>
                            <div className="container mt-3" style={{fontWeight: 'bolder'}}>

                              <div className="row">
                                        <div className="col-1">
                                             <BsFillHddStackFill ></BsFillHddStackFill>
                                        </div>
                                        <div className="col">
                                            Projects 
                                        </div>
                                    </div>
                            </div>
                          </div>
                    </div>
                    </a>
                     
                    <br/>

                    <a href="javascript:void(0)" onClick={() => props.setView( "team")} style={{textDecoration:'none', color: '#757575'}}>
                        <div className="container  nav-verticle" style={props.team == 'true'?styleTag:null}>
                        
                        <div className="card" style={{borderColor: 'transparent', backgroundColor: 'transparent', height: '60px'}}>
                            <div className="container mt-3" style={{fontWeight: 'bolder'}}>

                              <div className="row">
                                        <div className="col-1">
                                             <BsFillDiagram2Fill style={{fontSize:'20px'}}></BsFillDiagram2Fill>
                                        </div>
                                        <div className="col">
                                            Teams
                                        </div>
                                    </div>
                            </div>
                          </div>
                    </div>
                    </a>
                    
                    <br/>
                    <a href="javascript:void(0)" onClick={() => props.setView("document")} style={{textDecoration:'none', color:'black'}}>
                         <div className="container  nav-verticle" style={props.document == 'true'?styleTag:null}>

                        <div className="card" style={{borderColor: 'transparent', backgroundColor: 'transparent', height: '60px'}}>
                            <div className="container mt-3" style={{fontWeight: 'bolder', color: '#757575'}}>

                              <div className="row">
                                        <div className="col-1">
                                             <BsFillFileEarmarkTextFill></BsFillFileEarmarkTextFill>
                                        </div>
                                        <div className="col">
                                            Documents
                                        </div>
                                    </div>
                            </div>
                          </div>

                    </div>
                    </a>
                   
                    <br/>
                    <a href="javascript:void(0)" onClick={() => props.setView( "calendar")} style={{textDecoration:'none', color:'black'}}>
                          <div className="container  nav-verticle" style={props.calendar == 'true'?styleTag:null}>
                        <div className="card" style={{borderColor: 'transparent', backgroundColor: 'transparent', height: '60px'}}>
                            <div className="container mt-3" style={{fontWeight: 'bolder', color: '#757575'}}>

                              <div className="row">
                                        <div className="col-1">
                                             <BsFillCalendarEventFill></BsFillCalendarEventFill>
                                        </div>
                                        <div className="col">
                                            Calendar
                                        </div>
                                    </div>
                            </div>
                          </div>
                    </div>
                    </a>
                  
                    <br/>
                    
                    <div className="container  nav-verticle">
                        <div className="card" style={{borderColor: 'transparent', backgroundColor: 'transparent', height: '60px'}}>
                            <div className="container mt-3" style={{fontWeight: 'bolder', color: '#757575'}}>
                              
                              <div className="row">
                                        <div className="col-1">
                                             <BsLifePreserver></BsLifePreserver>
                                        </div>
                                        <div className="col">
                                            Support
                                        </div>
                                    </div>
                            </div>
                          </div>
                    </div>
                  

                </div>
              </div>
            
           
        
    </>
  )
}

export default Team_side_nav_servicer