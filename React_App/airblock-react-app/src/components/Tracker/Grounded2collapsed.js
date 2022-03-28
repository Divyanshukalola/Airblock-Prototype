// Created By: Divyanshu Kalola
// Description: The file contains main view of Grounded version 2 with modify RFQ and accept quote option.
// Component List: []
// Things TODO: Add more details to pop up

import React, { useState } from "react";


// Bootstrap import
import Modal from 'react-bootstrap/Modal'


const Grounded2collapsed = (props) => {
    const [edit, setEdit] = useState(false);

	const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleSubmit() {
      if(edit){
        setEdit(false);
      }else{
        setEdit(true);
      }
    
  }

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }


  	const [fullscreen1, setFullscreen1] = useState(true);
  const [show1, setShow1] = useState(false);

  function handleShow1(breakpoint) {
    setFullscreen1(breakpoint);
    setShow1(true);
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
							<button type="button" className="btn btn-secondary"  onClick={() => handleShow1(true)} style={{marginRight:'10px'}}>Modify RFQ</button>
                            <button type="button" className="btn btn-secondary"  onClick={() => handleShow(true)}>Accept Quote</button>
						</div>
                    
                    
                	</div>

					<Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
						<Modal.Header closeButton>
						<Modal.Title>Accept Quote</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							This is the Accept Quote section

						</Modal.Body>
					</Modal>


                    <Modal show={show1} fullscreen={fullscreen1} onHide={() => setShow1(false)}>
						<Modal.Header closeButton>
						<Modal.Title>Modify RFQ</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							This is the Modify RFQ section

						</Modal.Body>
					</Modal>
            
                    
            </div>
                
        </div>
          
	</div>
)
}

export default Grounded2collapsed
