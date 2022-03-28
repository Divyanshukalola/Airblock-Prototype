// Created By: Divyanshu Kalola
// Description: The file contains card view of tool in usage/flight
// Component List: []
// Things TODO: 

import React, { useState } from "react";

// google maps import
import { GoogleMap, LoadScript ,Marker} from '@react-google-maps/api';


const InFlightBlock = (props) => {

	const image = props.Image;

	const [style, setStyle] = useState({width:'100%',height:'400px',borderRadius: '10px',display:'none'});

	const Show = () => {
		console.log(style);
		if (style.display == 'none'){
			setStyle({width:'100%',height:'400px',borderRadius: '10px',display:'block'});
		}else{
			setStyle({width:'100%',height:'400px',borderRadius: '10px',display:'none'});
		}

	
  
	const defaultCenter = {
		lat: 41.3851, lng: 2.1734
	}
  
    
  };
return (
	<div>
        <div className="card ml-3 bg-white shadow-sm" style={{borderRadius: '20px', border: 'transparent', height: '100%'}}>
			<div className="card-header" style={{borderRadius: '20px 20px 0px 0px', backgroundColor: 'hsla(126, 82%, 40%, 0.11)'}}>
			<div className="row" >
				<div className="col mt-1">
					<p style={{color: 'black', marginBottom: '0'}} id="name"><b>Asset type/Name: {props.Name}</b></p>
						<p style={{fontSize: 'small', color: 'black',marginBottom: '0'}} id="pn#"><b>PN: </b>{props.PN}</p>
					<p style={{fontSize: 'small', color: 'black',marginBottom: '0'}}><b>Description : </b>{props.Descp}</p>
				</div>
				<div className="col-3">
					{/* <img src={require('../../static/img/sample.png')} alt="" height="90"/> */}
					
					<img src={image} alt="Card image" height="90"/>
				</div>
			</div>
			</div>
			<div className="card-body" style={{borderRadius: '0 0 20px 20px',backgroundColor: 'hsla(126, 82%, 40%, 0.11)'}}>
				
				
				<div className="row">
					<div className="col">
						
					
						
						<p><b>Operator: </b>{props.Operator}</p>
						
						<p><b>Last Service: </b>{props.LastService}</p>
						<div className="row border rounded ml-1">
							<div className="col-1 mt-4">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
									<path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
									</svg>
							</div>
							<div className="col">
								<p style={{margin: '0'}}><b>Status: {props.Status}</b></p>
								<p style={{margin: '0'}}><b>Avaible for: </b>{props.AvaibleFor}</p>
								<p style={{margin: '0'}}><b>Location: </b>{props.Location}</p>
							</div>
						</div>
						

					</div>
					<div className="col-6">
						<p><b>Created Date: </b>{props.CreatedDate}</p>
						<p><b>Owner: </b>{props.Owner}</p>
							

						
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
						<div className="col text-center">
							<button type="button" className="btn btn-secondary" onClick={Show} >View More Details</button>
						</div>
                    
                    
                	</div>

				<div style={style} className="my-4">



				<LoadScript
				googleMapsApiKey='AIzaSyBRb5wZAeG9Tzx0qoyXDMn6dd6W7PFsWXk'>
					<GoogleMap
					mapContainerStyle={ {height: "425px",width: "100%",borderRadius:'20px', boxShadow:'2px 2px 10px #888888'}}
					zoom={13}
					center={props.cord}
					>
						{<Marker key={props.Name} position={props.cord}/>}
					</GoogleMap>
				</LoadScript>
				
				</div>
				
		
				
			</div>
			
		</div>
          
	</div>
)
}




export default InFlightBlock
