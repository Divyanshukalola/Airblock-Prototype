// Created By: Divyanshu Kalola
// Description: The file contains card view of tool in maintenance
// Component List: []
// Things TODO: 

import React, { useState } from "react";



const Tracker_stats = (props) => {

return (
	<>
        <div className="card bg-white shadow-sm" style={{borderRadius: '20px', border: 'transparent', height: '100%'}}>
            <div className="card-header" style={{ borderRadius: '20px 20px 0px 0px', backgroundColor: 'hsla(0, 100%, 50%, 0.11)'}}>
                <div className="row" >
                    <div className="col mt-1">
                        <p style={{color: 'black', marginBottom: '0'}} id="name"><b>Asset type/Name: {props.Name}</b></p>
						<p style={{fontSize: 'small', color: 'black',marginBottom: '0'}} id="pn#"><b>PN: </b>{props.PN}</p>
						<p style={{fontSize: 'small', color: 'black',marginBottom: '0'}}><b>Description : </b>{props.Descp}</p>
                    </div>
                    <div className="col-3">
                        <img src={require('../../static/img/tool_default.png')} alt="" height="90"/>
                    </div>
                </div>
            </div>
            <div className="card-body" style={{borderRadius: '0 0 20px 20px',backgroundColor: 'hsla(0, 100%, 50%, 0.11)'}}>
                    
                    
                    <div className="row">
                        <div className="col">
                            
                        
                            
                            <p><b>Operator: {props.Operator}</b></p>
								<p ><b>Last Service: </b>{props.LastService}</p>
								<p ><b>Status: </b>{props.Status}</p>
                            
                        </div>
                        <div className="col-6">
                            <p><b>Created Date: </b>{props.CreatedDate}</p>
							<p><b>Owner: </b>{props.Owner}</p>
                            <p><b>Reason: </b>{props.Reason}</p>
                        </div>
                    </div>
                    <div className="row text-right" style={{textAlign:'right'}}>
                        <div className="col">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </div>
                    </div>
                    <hr/>

                    <div className="row">
                        <div className="col">
                            <center><div className="circle_lg-active"></div></center>
                            <div className="row my-3">
                                <div className="col text-center">
                                    Stage 1
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <center>
                                <div className="circle_sm-active my-1"></div>
                            </center>
                            
                        </div>
                        <div className="col">
                            <center><div className="circle_lg"></div></center>
                            <div className="row my-3">
                                <div className="col text-center inactive_text">
                                    Stage 2
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <center><div className="circle_sm my-1" ></div></center>
                            
                        </div>
                        <div className="col">
                            <center><div className="circle_lg"></div></center>
                            <div className="row my-3">
                                <div className="col text-center inactive_text">
                                    Stage 3
                                </div>
                            </div>
                        </div>

                        <div className="col-1">
                            <center><div className="circle_sm my-1" ></div></center>
                            
                        </div>
                        <div className="col">
                            <center><div className="circle_lg"></div></center>
                            <div className="row my-3">
                                <div className="col text-center inactive_text">
                                    Stage 4
                                </div>
                            </div>
                        </div>
                        
                    </div>
            
                    
            </div>
                
        </div>
          
	</>
)
}

export default Tracker_stats
