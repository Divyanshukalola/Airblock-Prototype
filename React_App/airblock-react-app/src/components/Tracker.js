// Created By: Divyanshu Kalola
// Description: The file contains all the components that comes under tracker.
// Component List: [Navigation, Stats, In_main, Need_main, InFlightBlock, Grounded, Grounded2, Footer] 
// Things TODO: connect to DB

import React, { useState, useEffect } from "react";

import { GoogleMap, LoadScript ,Marker} from '@react-google-maps/api';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";


// Importing app.css is css file to add styling
import SampleDfTool from "./Data/SampleDfTool1.json";

// Component
import Navigation_H from "./Navigation_H"; // Navigation
import Tracker_stats from "./Tracker/Stats"; // Show stats bar
import In_main from "./Tracker/In_main"; // Tool card if the tool is in maintenance
import Need_main from "./Tracker/Need_main" // Tool card if the tool is in need of maintenance
import InFlightBlock from "./Tracker/Inflight"; // Tool card if the tool is in flight/usage
import Grounded from "./Tracker/Grounded"; // Tool card if the tool is grounded/suspended
import Grounded2 from "./Tracker/Grounded2"; // Tool card if the tool is grounded/suspended with possible options. [Modify RFQ, accept quote]


import In_maincollapsed from "./Tracker/In_maincollapsed"; // Tool card if the tool is in maintenance
import Need_maincollapsed from "./Tracker/Need_maincollapsed" // Tool card if the tool is in need of maintenance
import InFlightcollapsed from "./Tracker/Inflightcollapsed"; // Tool card if the tool is in flight/usage
import Groundedcollapsed from "./Tracker/Groundedcollapsed"; // Tool card if the tool is grounded/suspended
import Grounded2collapsed from "./Tracker/Grounded2collapsed"; // Tool card if the tool is grounded/suspended with possible options. [Modify RFQ, accept quote]

import Footer from "./Footer"; // Page footer



import Pagination from '@mui/material/Pagination';


//icons
import { BsFillSquareFill } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { BsFillFileXFill } from "react-icons/bs";
import { concat } from "@apollo/client";
import { BsFillFilePlusFill } from "react-icons/bs";




const Tracker = () => {

let PageSize = 4;



const [styleCard, setstyleCard] = useState(false);
const [inFLightTag, setinFLightTag] = useState(true);
const [inMaintenanceTag, setinMaintenanceTag] = useState(true);
const [inNeed, setinNeed] = useState(true);
const [isGrounded, setisGrounded] = useState(true);
const [SampleDfTool1, setSampleDfTool1] = useState(splitArrayIntoChunksOfLen(SampleDfTool,PageSize));


// var SampleDfTool1 = splitArrayIntoChunksOfLen(SampleDfTool,PageSize);
 useEffect(() => {

    search();
	console.log("User effect trig")
  });
 
var total = SampleDfTool.length;
var grounded = 0;
var inMain = 0;
var nMain=0;
var iUsage=0;

for(let i = 0; i < total; i ++){
	  if( (SampleDfTool[i].ServiceStatus == 'IF')){

		  iUsage++;
	  }
	  if( (SampleDfTool[i].ServiceStatus == 'IM')){

		  inMain++;
	  }
	  if( (SampleDfTool[i].ServiceStatus == 'NM')){

		  nMain++;
	  }
	  
	  if((SampleDfTool[i].ServiceStatus == 'GN1')){

		  grounded++;
	  }
	  if((SampleDfTool[i].ServiceStatus == 'GN2')){

		  grounded++;
	  }
  }
// Split the array in chunks of specified length, here we are splitting the array in the chunks of 2.
function splitArrayIntoChunksOfLen(arr, len) {
	

	if(arr.length < 2){
		return [arr];
	}else{
	const res = [];
  	const arr1 = [];
  for(let i = 0; i < arr.length; i ++){
	  if(inFLightTag && (arr[i].ServiceStatus == 'IF')){
		  arr1.push(arr[i]);
		  iUsage++;
	  }
	  if(inMaintenanceTag && (arr[i].ServiceStatus == 'IM')){
		  arr1.push(arr[i]);
		  inMain++;
	  }
	  if(inNeed && (arr[i].ServiceStatus == 'NM')){
		  arr1.push(arr[i]);
		  nMain++;
	  }
	  
	  if(isGrounded && (arr[i].ServiceStatus == 'GN1')){
		  arr1.push(arr[i]);
		  grounded++;
	  }
	  if(isGrounded && (arr[i].ServiceStatus == 'GN2')){
		  arr1.push(arr[i]);
		  grounded++;
	  }
  }


    for (let i = 0; i < arr1.length; i += len) {
        const chunk = arr1.slice(i, i + len);
        res.push(chunk);
    }
    return res;
	}
	
 
}

function changeLooks(){

	if (styleCard){
		setstyleCard(false);
	}else{
		setstyleCard(true);
	}
	setPage(1);
	
}

function showInflight(){
	setinMaintenanceTag(false);
	setinNeed(false);
	setisGrounded(false);
	setinFLightTag(true);
search();
	setPage(1);

	console.log(SampleDfTool1)
	
}
function showNeedMain(){
	setinMaintenanceTag(false);
	setinFLightTag(false);
	setisGrounded(false);
	setinNeed(true);
search();
	setPage(1);
	
}
function showInMain(){
	setinFLightTag(false);
	setinNeed(false);
	setisGrounded(false);
	setinMaintenanceTag(true);
search();
	setPage(1);
	
}
function showGrounded(){
	setinMaintenanceTag(false);
	setinNeed(false);
	setinFLightTag(false);
	setisGrounded(true);
	search();
	setPage(1);
	
}

function removeFilter(){
	setinMaintenanceTag(true);
	setinNeed(true);
	setinFLightTag(true);
	setisGrounded(true);
search();
	setPage(1);
	

}

// pagination
 const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };








// search filter
function search() {
	var output;
	const SampleDfTool2 = (SampleDfTool);
	var input = document.getElementById('search').value.toUpperCase();
	
	const arr1 = [];
  for(let i = 0; i < SampleDfTool2.length; i ++){
	  if(inFLightTag && (SampleDfTool2[i].ServiceStatus == 'IF')){
		  arr1.push(SampleDfTool2[i]);
	  }
	  if(inMaintenanceTag && (SampleDfTool2[i].ServiceStatus == 'IM')){
		  arr1.push(SampleDfTool2[i]);
	  }
	  if(inNeed && (SampleDfTool2[i].ServiceStatus == 'NM')){
		  arr1.push(SampleDfTool2[i]);
	  }
	  
	  if(isGrounded && (SampleDfTool2[i].ServiceStatus == 'GN1')){
		  arr1.push(SampleDfTool2[i]);
	  }
	  if(isGrounded && (SampleDfTool2[i].ServiceStatus == 'GN2')){
		  arr1.push(SampleDfTool2[i]);
	  }
  }

	
	try {
  	output = arr1.filter(match);

	    setSampleDfTool1(splitArrayIntoChunksOfLen(output,PageSize));
	}
	catch(err) {
		setSampleDfTool1(splitArrayIntoChunksOfLen(SampleDfTool,PageSize));
	}



	function match(content){
		
		if(content["Name"].toUpperCase().indexOf(input) > -1){
			return content;
		}
	}




}

//city name finder
function getCity(coordinates) {


    var lat = coordinates["lat"];
    var lng = coordinates["lng"];
	var place = 'getReverseGeocodingData(lat,lng)';
	// setTimeout(() => {  console.log("World!"); }, 1000);
	// console.log("Type of "+typeof place)

	return place;
	
}
 const navigate = useNavigate();
// add assest
function addAsset(){
	navigate('/add_asset');
}




return (
	<div>
		<div className='row'>
            <div className='col-1'>

            </div>
            <div className='col'>
				{console.log("Test "+grounded)}

					<Navigation_H></Navigation_H>
					<Tracker_stats
					total = {total}
					 grounded = {grounded}
					 inMain = {inMain}
					 nMain = {nMain}
					 iUsage = {iUsage}
					></Tracker_stats>
					

					
						<div className="card mx-3 mb-3 bg-white shadow" style={{borderRadius: '20px', border: 'transparent'}}>
								<div className="card-body">
									<div  className="row">
										<div className="col">
											<div className="mx-3 mb-3 mt-2">
												<div class="input-group flex-nowrap">
													
												<span class="input-group-text" id="addon-wrapping" type="submit">Search</span>
												<input type="text" class="form-control" placeholder="Name or PN#" aria-label="Username" id="search" onKeyUp={search} aria-describedby="addon-wrapping"/>
												
												</div>
											</div>
										</div>
										<div className="col-4" style={{textAlign:"right"}}>
											<a href="javascript:void(0)" onClick={addAsset}>
												<BsFillFilePlusFill className="mt-2 mx-2" style={{fontSize: '37px', color:'green',}}>
												</BsFillFilePlusFill>
												
											</a>
											<a href="javascript:void(0)" onClick={removeFilter}>
												<BsFillFileXFill className="mt-2 mx-2" style={{fontSize: '37px', color:'blue',}}>
												</BsFillFileXFill>
												
												</a>
											<a href="javascript:void(0)" onClick={showInflight} style={{textDecoration: 'none',textAlign: 'center',  position: 'relative'}}>
												<span style={{color:'white',top: '20%',left: '35%',position: 'absolute',fontSize:'14px'}}>I.F</span>
												<BsFillSquareFill className="mt-2 mx-2" style={{fontSize: '37px', color:'#00CB14'}}></BsFillSquareFill>
											</a>
											<a href="javascript:void(0)" onClick={showInMain} style={{textDecoration: 'none',textAlign: 'center',  position: 'relative'}}>
												<span style={{color:'white',top: '20%',left: '32%',position: 'absolute',fontSize:'14px'}}>I.M</span>
												<BsFillSquareFill className="mt-2 mx-2" style={{fontSize: '37px', color:'#FFC700'}}></BsFillSquareFill>
												</a>
											<a href="javascript:void(0)" onClick={showNeedMain} style={{textDecoration: 'none',textAlign: 'center',  position: 'relative'}}>
												<span style={{color:'white',top: '20%',left: '25%',position: 'absolute',fontSize:'14px'}}>N.M</span>
												<BsFillSquareFill className="mt-2 mx-2" style={{fontSize: '37px', color:'#FF7A00'}}></BsFillSquareFill>
												</a>
											<a href="javascript:void(0)" onClick={showGrounded} style={{textDecoration: 'none',textAlign: 'center',  position: 'relative'}}>
												<span style={{color:'white',top: '20%',left: '26%',position: 'absolute',fontSize:'14px'}}>G.N</span>
												<BsFillSquareFill className="mt-2 mx-2" style={{fontSize: '37px', color:'#D20000'}}></BsFillSquareFill>
												</a>
											<a href="javascript:void(0)" onClick={changeLooks}>{styleCard?<BsFillGridFill  className="mt-2 mx-2" style={{fontSize: '37px',color:"black"}}></BsFillGridFill>:<BsList className="mt-2 mx-2" style={{fontSize: '30px',color:"black"}}></BsList>}</a>
											
										</div>
									</div>
								
								{
									styleCard
								?
								<div id="cluster">
									
									 { splitArrayIntoChunksOfLen(SampleDfTool1[page-1],2).map((df,index) => {
											return (
												
												<div id="card">
													{splitArrayIntoChunksOfLen(SampleDfTool1[page-1],2).length !== 1?
													<>
													<div className="row mx-1 mt-2">

														{df.length<2?
														<>
														<div className="col" >
															

																{(df[0].ServiceStatus) === 'IF'? 
																<InFlightBlock
																	Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	cord = {df[0].cord}
																></InFlightBlock>
																:null}

																{(df[0].ServiceStatus) === 'IM'? <In_main 
																Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	cord = {df[0].cord}
																></In_main>:null}

																{(df[0].ServiceStatus) === 'NM'? <Need_main 
																Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	Reason = {df[0].Reason}
																	cord = {df[0].cord}
																></Need_main>:null}

																{(df[0].ServiceStatus) === 'GN1'? 
																<Grounded
																	Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	Reason = {df[0].Reason}
																	cord = {df[0].cord}


																></Grounded>
																:null}

																{(df[0].ServiceStatus) === 'GN2'? 
																<Grounded2
																	Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	Reason = {df[0].Reason}
																	cord = {df[0].cord}


																></Grounded2>
																:null}

														</div>
														<div className="col"></div>
														</>
														:
														<>
														<div className="col" id="card">
															

																{(df[0].ServiceStatus) === 'IF'? 
																<InFlightBlock
																	Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	cord = {df[0].cord}
																></InFlightBlock>
																:null}

																{(df[0].ServiceStatus) === 'IM'? <In_main 
																Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	Reason = {df[0].Reason}
																	cord = {df[0].cord}></In_main>:null}

																{(df[0].ServiceStatus) === 'NM'? <Need_main 
																Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	Reason = {df[0].Reason}
																	cord = {df[0].cord}></Need_main>:null}

																{(df[0].ServiceStatus) === 'GN1'? 
																<Grounded
																	Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	Reason = {df[0].Reason}
																	cord = {df[0].cord}


																></Grounded>
																:null}

																{(df[0].ServiceStatus) === 'GN2'? 
																<Grounded2
																	Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	Reason = {df[0].Reason}
																	cord = {df[0].cord}


																></Grounded2>
																:null}

														</div>
														<div className="col" id="card">
															

																{(df[1].ServiceStatus) === 'IF'? 
																<InFlightBlock
																	Name = {df[1].tool}
																	PN={df[1].PN}
																	Descp = {df[1].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[1].Operator}
																	LastService = {df[1].LastService}
																	Owner = {df[1].Owner}
																	CreatedDate = {df[1].CreatedDate}
																	Status = {df[1].Status}
																	AvaibleFor = {df[1].AvaibleFor}
																	Location = {getCity(df[1].cord)}
																	Reason = {df[1].Reason}
																	cord = {df[1].cord}
																></InFlightBlock>
																:null}

																{(df[1].ServiceStatus) === 'IM'? 
																<In_main 
																Name = {df[1].tool}
																	PN={df[1].PN}
																	Descp = {df[1].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[1].Operator}
																	LastService = {df[1].LastService}
																	Owner = {df[1].Owner}
																	CreatedDate = {df[1].CreatedDate}
																	Status = {df[1].Status}
																	AvaibleFor = {df[1].AvaibleFor}
																	Location = {getCity(df[1].cord)}
																	Reason = {df[1].Reason}
																	cord = {df[1].cord}>
																</In_main>
																:null}

																{(df[1].ServiceStatus) === 'NM'? 
																<Need_main
																Name = {df[1].tool}
																	PN={df[1].PN}
																	Descp = {df[1].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[1].Operator}
																	LastService = {df[1].LastService}
																	Owner = {df[1].Owner}
																	CreatedDate = {df[1].CreatedDate}
																	Status = {df[1].Status}
																	AvaibleFor = {df[1].AvaibleFor}
																	Location = {getCity(df[1].cord)}
																	Reason = {df[1].Reason}
																	cord = {df[1].cord}>	
																</Need_main>
																:null}

																{(df[1].ServiceStatus) === 'GN1'? 
																<Grounded
																	Name = {df[1].tool}
																	PN={df[1].PN}
																	Descp = {df[1].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[1].Operator}
																	LastService = {df[1].LastService}
																	Owner = {df[1].Owner}
																	CreatedDate = {df[1].CreatedDate}
																	Status = {df[1].Status}
																	AvaibleFor = {df[1].AvaibleFor}
																	Location = {getCity(df[1].cord)}
																	Reason = {df[1].Reason}
																	cord = {df[1].cord}


																></Grounded>
																:null}

																{(df[1].ServiceStatus) === 'GN2'? 
																<Grounded2
																	Name = {df[1].tool}
																	PN={df[1].PN}
																	Descp = {df[1].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[1].Operator}
																	LastService = {df[1].LastService}
																	Owner = {df[1].Owner}
																	CreatedDate = {df[1].CreatedDate}
																	Status = {df[1].Status}
																	AvaibleFor = {df[1].AvaibleFor}
																	Location = {getCity(df[1].cord)}
																	Reason = {df[1].Reason}
																	cord = {df[1].cord}



																></Grounded2>
																:null}

															
														
														</div>
														</>
														}
														
													
													</div>  
													<br />
													</>
													:
													null}
													
												</div>
											
											);
											})} 
								</div>
								:
								<div id="cluster">

									{ splitArrayIntoChunksOfLen(SampleDfTool1[page-1],1).map((df,index) => {
											return (
												
												<div id="card">

													{splitArrayIntoChunksOfLen(SampleDfTool1[page-1],1).length !== 1?
													<>
													<div className="row mx-1 mt-2">

														<>
														<div className="col" >
															

																{(df[0].ServiceStatus) === 'IF'? 
																<InFlightcollapsed
																	Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	AvaibleFor = {df[0].AvaibleFor}
																	Location = {getCity(df[0].cord)}
																	cord = {df[0].cord}
																></InFlightcollapsed>
																:null}

																{(df[0].ServiceStatus) === 'IM'? <In_maincollapsed 
																Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	Reason = {df[0].Reason}
																	Location = {getCity(df[0].cord)}
																	cord = {df[0].cord}
																></In_maincollapsed>:null}

																{(df[0].ServiceStatus) === 'NM'? <Need_maincollapsed
																Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	Reason = {df[0].Reason}
																	Location = {getCity(df[0].cord)}
																	cord = {df[0].cord}
																></Need_maincollapsed>:null}

																{(df[0].ServiceStatus) === 'GN1'? 
																<Groundedcollapsed
																	Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	Reason = {df[0].Reason}
																	Location = {getCity(df[0].cord)}
																	cord = {df[0].cord}


																></Groundedcollapsed>
																:null}

																{(df[0].ServiceStatus) === 'GN2'? 
																<Grounded2collapsed
																	Name = {df[0].Name}
																	PN={df[0].PN}
																	Descp = {df[0].Descp}
																	Image = {require('../static/img/tool_default.png')}
																	Operator = {df[0].Operator}
																	LastService = {df[0].LastService}
																	Owner = {df[0].Owner}
																	CreatedDate = {df[0].CreatedDate}
																	Status = {df[0].Status}
																	Reason = {df[0].Reason}
																	Location = {getCity(df[0].cord)}
																	cord = {df[0].cord}


																></Grounded2collapsed>
																:null}

														</div>

														</>
														
														
													
													</div>  
													<br />
													</>
													:
													null}
													
													
												</div>
											
											);
											})}
								</div>
								}


								<div style={{float:'center'}}>

								
								<Pagination count={SampleDfTool1.length} page={page} onChange={handleChange} />

								</div>
									





								</div>
						
						</div>

				<Footer></Footer>
			</div>
            <div className='col-1'>

            </div>
        </div>
          
	</div>
)
}

export default Tracker
