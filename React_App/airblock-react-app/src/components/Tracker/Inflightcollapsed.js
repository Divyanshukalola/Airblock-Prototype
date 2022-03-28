// Created By: Divyanshu Kalola
// Description: The file contains card view of tool in usage/flight
// Component List: []
// Things TODO: 

import React, { useState } from "react";

// google maps import
import { GoogleMap, LoadScript ,Marker} from '@react-google-maps/api';


//icons
import { BsFillGeoAltFill } from "react-icons/bs";


const InFlightcollapsed = (props) => {

	const image = props.Image;

	const [style, setStyle] = useState({width:'100%',height:'400px', border: 'transparent',borderRadius: '10px',display:'none',backgroundColor: 'hsla(126, 82%, 40%, 0.11)'});

	const Show = () => {
		console.log(style);
		if (style.display == 'none'){
			setStyle({width:'100%',height:'400px',borderRadius: '10px',border: 'transparent',display:'block',backgroundColor: 'hsla(126, 82%, 40%, 0.11)'});
		}else{
			setStyle({width:'100%',height:'400px',borderRadius: '10px', border: 'transparent',display:'none',backgroundColor: 'hsla(126, 82%, 40%, 0.11)'});
		}

	
  
	const defaultCenter = {
		lat: 41.3851, lng: 2.1734
	}
  
    
  };
return (
	<div>
        <div className="card ml-3 bg-white shadow-sm" style={{borderRadius: '20px', border: 'transparent', height: '100%'}}>
			<div className="card-header" style={{borderRadius: '20px 20px 20px 20px', backgroundColor: 'hsla(126, 82%, 40%, 0.11)'}}>
			<div className="row" >
				<div className="col-4 mt-1">
					<p style={{color: 'black', marginBottom: '0'}} id="name"><b>Asset type/Name: {props.Name}</b></p>
					<p style={{fontSize: 'small', color: 'black',marginBottom: '0'}} id="pn#"><b>PN: </b>{props.PN}</p>
					<p style={{fontSize: 'small',margin: '0'}}><b>Location: </b>{props.Location} <a href='javascript:void(0)' onClick={Show}><BsFillGeoAltFill/></a> </p>
				</div>

				<div className="col-3">
						<p style={{margin:'3px', fontSize:'small'}}><b>Operator: </b>{props.Operator}</p>
						<p style={{margin:'3px', fontSize:'small'}}><b>Last Service: </b>{props.LastService}</p>
						<p style={{margin:'3px', fontSize:'small'}}><b>Status: {props.Status}</b></p>
				</div>
				<div className="col-4">
						<p style={{margin:'3px', fontSize:'small'}}><b>Created Date: </b>{props.CreatedDate}</p>
						<p style={{margin:'3px', fontSize:'small'}}><b>Owner: </b>{props.Owner}</p>
						<p style={{margin:'3px', fontSize:'small'}}><b>Avaible for: </b>{props.AvaibleFor}</p>
				</div>
				<div className="col-1">
					<img src={image} alt="Card image" height="60" className="mt-2"/>
				</div>
			</div>
			</div>

			<div style={style} className="mb-3">



				<LoadScript
				googleMapsApiKey='AIzaSyBRb5wZAeG9Tzx0qoyXDMn6dd6W7PFsWXk'>
					<GoogleMap
			
					mapContainerStyle={{height: "425px",width: "100%",borderRadius:'0px 0px 20px 20px'}}
					zoom={13}
					center={props.cord}
					>
						{<Marker key={props.Name} position={props.cord}/>}
					</GoogleMap>
				</LoadScript>
				
				</div>
			
		</div>
          
	</div>
)
}




export default InFlightcollapsed
