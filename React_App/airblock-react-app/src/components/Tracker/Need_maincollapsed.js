// Created By: Divyanshu Kalola
// Description: The file contains the card view of tool in need of maintenance.
// Component List: [CreateUpkeep] 
// Things TODO: 

import React, { useState } from "react";

//Bootstrap inports
import Modal from 'react-bootstrap/Modal'

//Component Import
import CreatUpkeep from './CreateUpkeep' // Creats upkeep request view

const Need_maincollapsed = (props) => {



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
                    <div className="col-4 mt-1">
                    <p style={{color: 'black', marginBottom: '0'}} id="name"><b>Asset type/Name: {props.Name}</b></p>
					<p style={{fontSize: 'small', color: 'black',marginBottom: '0'}} id="pn#"><b>PN: </b>{props.PN}</p>
					<p style={{fontSize: 'small',margin: '0'}}><b>Location: </b>{props.Location} </p>

                    </div>
                    <div className="col-3">
                        <p style={{margin:'3px', fontSize:'small'}}><b>Operator: </b>{props.Operator}</p>
						<p style={{margin:'3px', fontSize:'small'}}><b>Last Service: </b>{props.LastService}</p>
						<p style={{margin:'3px', fontSize:'small'}}><b>Status: {props.Status}</b></p>
                        
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
            <div className="card-body" style={{borderRadius: '0 0 20px 20px',backgroundColor: 'hsla(46, 100%, 50%, 0.11)'}}>

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

export default Need_maincollapsed
