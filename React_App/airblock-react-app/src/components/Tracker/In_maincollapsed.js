// Created By: Divyanshu Kalola
// Description: The file contains card view of tool in maintenance
// Component List: []
// Things TODO: 

import React, { useState } from "react";



const In_maincollapsed = (props) => {

return (
	<>
        <div className="card bg-white shadow-sm" style={{borderRadius: '20px', border: 'transparent', height: '100%'}}>
            <div className="card-header" style={{ borderRadius: '20px 20px 20px 20px', backgroundColor: 'hsla(0, 100%, 50%, 0.11)'}}>
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
                    <div className="col-1 mt-2" >
                        <img src={require('../../static/img/tool_default.png')}  alt="" height="60"/>
                    </div>
                </div>
            </div>
           
                
        </div>
          
	</>
)
}

export default In_maincollapsed
