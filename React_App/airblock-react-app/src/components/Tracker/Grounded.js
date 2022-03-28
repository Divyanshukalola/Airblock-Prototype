// Created By: Divyanshu Kalola
// Description: The file contains main view of Grounded version 1 with only view details option.
// Component List: []
// Things TODO: Add more details to pop up



import React, { useState } from "react";


// Bootstrap Import
import Modal from 'react-bootstrap/Modal'


const Grounded = (props) => {

const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

return (
	<div>
        <div className="card bg-white shadow-sm" style={{borderRadius: '20px', border: 'transparent', height: '100%'}}>
            <div className="card-header" style={{ borderRadius: '20px 20px 0px 0px', backgroundColor: 'hsla(0, 100%, 50%, 0.11)'}}>
                <div className="row" >
                    <div className="col mt-1">
                        <p style={{color: 'black', marginBottom: '0'}} id="name"><b>Asset type/Name: {props.Name}</b></p>
						<p style={{fontSize: 'small', color: 'black',marginBottom: '0'}} id="pn#"><b>PN: </b>{props.PN}</p>
						<p style={{fontSize: 'small', color: 'black',marginBottom: '0'}}><b>Description : </b>{props.Descp}</p>
                    </div>
                    <div className="col-3">
                        <img src={props.Image} alt="" height="90"/>
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
                    <br />
                    <hr/>

                    <div className="row">
						<div className="col text-center">
							<button type="button" className="btn btn-secondary"  onClick={() => handleShow(true)}>View More Details</button>
						</div>
                    
                    
                	</div>

					<Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
						<Modal.Header closeButton>
						<Modal.Title>More Details</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							This is the more Details section for grounded aircraft.

						</Modal.Body>
					</Modal>
            
                    
            </div>
                
        </div>
          
	</div>
)
}

export default Grounded
