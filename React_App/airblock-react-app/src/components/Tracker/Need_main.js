// Created By: Divyanshu Kalola
// Description: The file contains the card view of tool in need of maintenance.
// Component List: [CreateUpkeep] 
// Things TODO: 

import React, { useState } from "react";

//Bootstrap inports
import Modal from 'react-bootstrap/Modal'

//Component Import
import CreatUpkeep from './CreateUpkeep' // Creats upkeep request view



const Tracker_stats = () => {


const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }


return (
	<>
        <div className="card bg-white shadow-sm" style={{borderRadius: '20px', border: 'transparent', height: '100%'}}>
            <div className="card-header" style={{borderRadius: '20px 20px 0px 0px', backgroundColor: 'hsla(46, 100%, 50%, 0.11)'}}>
                <div className="row" >
                    <div className="col mt-1">
                        <p style={{color: 'black', marginBottom: '0'}} id="name"><b>Asset type/Name: Tool - GSE 1</b></p>
                        <p style={{fontSize: 'small', color: 'black', marginBottom: '0'}} id="pn#"><b>PN: </b>123456781</p>
                        <p style={{fontSize: 'small', color: 'black', marginBottom: '0'}}><b>Description : </b>This is the optional description for the aircraft.</p>
                    </div>
                    <div className="col-3">
                        <img src={require('../../static/img/tool_default.png')} alt="" height="90"/>
                    </div>
                </div>
            </div>
            <div className="card-body" style={{borderRadius: '0 0 20px 20px',backgroundColor: 'hsla(46, 100%, 50%, 0.11)'}}>
                
                
                <div className="row">
                    <div className="col">
                        
                    
                        
                        <p><b>Operator: </b>AIC, Mexico</p>
                        
                        <p><b>Last Service: </b>08/23/2021</p>
                        <p><b>Status: </b>Close to upkeep</p>
                        
                    </div>
                    <div className="col-6">
                        <p><b>Created Date: </b>Oct. 1, 2019</p>
                        <p><b>Owner: </b>Airblock Aero Corp.</p>
                        <p><b>Reason: </b>Maintanance Due</p>
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
                <br/>
                <hr/>

                <div className="row">
                    <div className="col text-center">
                        <button type="button" className="btn btn-warning"  onClick={() => handleShow(true)}>Create the Upkeep request</button>
                    </div>
                    
                    
                </div>
                

                
            </div>

        </div>
        {/* select type of request */}

         <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Create Upkeep Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreatUpkeep></CreatUpkeep>

            </Modal.Body>
        </Modal>

    </>
          

)
}

export default Tracker_stats
