// Created By: Divyanshu Kalola
// Description: The file contains main view of Grounded version 1 with only view details option.
// Component List: []
// Things TODO: Add more details to pop up



import React, { useState } from "react";


// Bootstrap Import
import Modal from 'react-bootstrap/Modal'


const Groundedcollapsed = (props) => {

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
                    <div className="col-4 mt-1">
                        <p style={{color: 'black', marginBottom: '0'}} id="name"><b>Asset type/Name: {props.Name}</b></p>
						<p style={{fontSize: 'small', color: 'black',marginBottom: '0'}} id="pn#"><b>PN: </b>{props.PN}</p>

                    </div>
                     <div className="col-3">
                            
                        
                            
                            <p style={{margin:'3px', fontSize:'small'}}><b>Operator: {props.Operator}</b></p>
								<p style={{margin:'3px', fontSize:'small'}}><b>Last Service: </b>{props.LastService}</p>
								<p style={{margin:'3px', fontSize:'small'}}><b>Status: </b>{props.Status}</p>
                            
                        </div>
                        <div className="col-4">
                            <p style={{margin:'3px', fontSize:'small'}}><b>Created Date: </b>{props.CreatedDate}</p>
							<p style={{margin:'3px', fontSize:'small'}}><b>Owner: </b>{props.Owner}</p>
                            <p style={{margin:'3px', fontSize:'small'}}><b>Reason: </b>{props.Reason}</p>
                        </div>
                    <div className="col-1">
                        <img src={props.Image} alt="" height="60" className="mt-2"/>
                    </div>
                </div>
            </div>
            <div className="card-body" style={{borderRadius: '0 0 20px 20px',backgroundColor: 'hsla(0, 100%, 50%, 0.11)'}}>
                    
                  

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

export default Groundedcollapsed
