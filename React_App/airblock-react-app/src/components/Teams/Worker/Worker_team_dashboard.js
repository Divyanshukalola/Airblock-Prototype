import React, { useState, useEffect } from "react";

//componenets
import Team_side_nav from './Team_side_nav_worker'
import Team_footer from '../Team_footer'
import Team_project_card from './Subcomponents/Team_project_card'

// icons
import { BsSearch } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";

// import { BsFillGrid1X2Fill } from "react-icons/bs";



const Worker_team_dashboard = () => {



  return (
    <>
        {/* Servicer Team Dashboard  */}
        <div className="row" style={{backgroundColor: 'rgb(246, 246, 250)',height:'100%',width:'auto'}}>
            <div className="col-2" style={{backgroundColor: 'white'}}>
                <Team_side_nav></Team_side_nav>

            </div>
            <div className="col-10" style={{backgroundColor: 'rgb(246, 246, 250)', overflowY: 'scroll',height:'100%'}}>
                 <div className="row" style={{backgroundColor: 'rgba(255, 255, 255)'}}>
                    <div className="col border">
                        <div id="navbar_airblock" className="card " style={{borderRadius: '0px'}}>
                            <nav className="navbar navbar-expand-lg navbar-light bg-transparent card" style={{border: 'transparent'}}>
                                <div className="row my-2 container-fluid">
                                    <div className="col">
                                    
                                            {/* search bar */}
                                            <div className="row">
                                                <div className="col">
                                                    <input className="form-control mr-sm-2" type="search" placeholder="Search name or ID ..." aria-label="Search"/>
                                                </div>
                                                <div className="col-1 mt-1">
                                                    <a href="javascript:void(0)" style={{color:'rgb(145, 150, 153)'}}>
                                                        <BsSearch style={{fontSize:'25px'}}></BsSearch>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            
                                            

                                
                                    </div>
                                    <div className="col-5 text-right " style={{textAlign:'right'}}>
                                        <span id="date" style={{marginRight: '10px', color:  'rgb(145, 150, 153)', fontWeight: 'bolder' , fontSize: 'small'}}></span>
                                    
                                                {/* bell  */}
                                            <a href="javascript:void(0)" className="mx-5"style={{textDecoration: 'none',color:'rgb(145, 150, 153)'}} >
                                                <BsFillBellFill style={{fontSize:'25px'}}></BsFillBellFill>
                                            </a>

                                            {/* name and image  */}
                                            <a href="javascript:void(0)" style={{textDecoration: 'none'}}>
                                                
                                                <img src="https://www.fulloutcreative.com/wp-content/uploads/2021/04/jericho-lopez-headshot-square.jpg" width="40" className="rounded-circle border" height="40"/>
                                                <span className="mx-3" style={{color: 'black', fontWeight: 'bolder'}}>Jack Polish</span>
                                            </a>
                                    
                                    </div>
                                </div>


                                
                        

                            
                            
                            </nav>
                        </div>

                    </div>
                </div>



                {/* dashboard content  */}
                                 <div style={{backgroundColor: 'rgb(246, 246, 250)',height:'100%'}}>
                                    <div className="container mt-5" style={{fontWeight: 'bolder'}}>
                                        <h3>Projects</h3>
                                    </div>

                                    <div className="card mt-3 border" style={{backgroundColor: 'rgb(252, 252, 255)'}}>
                                        <div className="body">

                                           <div className="row mx-3 my-3">
                                                <div className="col" >
                                                    <a href="javascript:void(0)" className="mx-2" style={{textDecoration: 'none'}} data-toggle="tooltip" data-placement="top" title="Create New Project">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                                        </svg>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-2" style={{textDecoration: 'none'}} data-toggle="tooltip" data-placement="top" title="Go to Docuements">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                                                            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                                        </svg>
                                                    </a>
                                                    <a href="javascript:void(0)" className="mx-2" style={{textDecoration: 'none'}} data-toggle="tooltip" data-placement="top" title="InMails">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                                        </svg>
                                                    </a>
                                                <a href="javascript:void(0)" className="mx-2" style={{textDecoration: 'none'}} data-toggle="tooltip" data-placement="top" title="Reload" onclick="location.reload();">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                                    </svg>
                                                </a>
                                                </div>
                                            </div>

                                        {/* cards */}

                               <Team_project_card></Team_project_card>
                            <br />

                                          
                                       
                                        </div>
                                    </div>
                                   <Team_footer ></Team_footer>
                                </div>
            </div>
        </div>
           
        
    </>
  )
}

export default Worker_team_dashboard