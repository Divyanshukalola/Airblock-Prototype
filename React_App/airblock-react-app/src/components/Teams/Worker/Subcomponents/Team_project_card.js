import React, { useState, useEffect } from "react";


// icons
import { BsSearch } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";

// import { BsFillGrid1X2Fill } from "react-icons/bs";



const Team_project_card = () => {

    const [display_style_card,setdisplay_style_card] = useState({display: 'none'});
    const [display_style_iconup,setdisplay_style_iconup] = useState({display: 'none'});
    const [display_style_icondown,setdisplay_style_icondown] = useState({display: 'inline'});

    function expand() {
        console.log("Testinggggggg")
        if (display_style_card.display == 'none'){
            
            console.log('Show')
           setdisplay_style_card( {display: 'inline'});
            setdisplay_style_iconup ({display: 'inline'});
             setdisplay_style_icondown ({display: 'none'});
        }else{
            console.log('hide')

            setdisplay_style_card( {display: 'none'});
            setdisplay_style_iconup ({display: 'none'});
             setdisplay_style_icondown ({display: 'inline'});
        }
        
    }



  return (
    <>
        {/* Servicer Team Dashboard  */}
         <div className="card mx-3 mt-3" >
            <div className="card-body">
                <div className="row">
                
            
                <div className="col-4 mt-3">
                    <p style={{margin: '0'}}> <span style={{fontWeight:'1000'}} className="mr-1">Project:</span>  Aircraft Engine</p>
                    <p style={{margin: '0', fontSize: 'medium'}}><span style={{fontWeight:'1000'}} className="mr-1">Deadline:</span> 30th March 2022</p>
                
                </div>
                <div className="col-6">
                    <div className="row mt-3">
                        <div className="col-2 text-center">
                            <center><div className="circle_lg-active"></div></center>
                            <p style={{margin: '0'}}></p>
                            <p style={{lineHeight: '1.2', fontSize: '10px'}} className="mt-2">Project <br/> Started</p>
                        </div>
                        
                    
                        <div className="col-2 text-center">
                            <center><div className="circle_lg-active"></div></center>
                            <p style={{margin: '0'}}></p>
                            <p style={{lineHeight: '1.2', fontSize: '10px'}} className="mt-2">In progress</p>
                            
                        </div>
                    
                        <div className="col-2 text-center">
                            <center><div className="circle_lg"></div></center>
                            <p style={{margin: '0'}}></p>
                            <p style={{lineHeight: '1.2', fontSize: '10px'}} className="mt-2">Waiting for <br/> approval</p>
                            
                        </div>
                    
                        <div className="col-2 text-center">
                            <center><div className="circle_lg"></div></center>
                            <p style={{margin: '0'}}></p>
                            <p style={{lineHeight: '1.2', fontSize: '10px'}} className="mt-2">Approved</p>
                        
                        </div>
                        </div>
                </div>
                <div className="col-2" style={{textAlign:'right'}}>
                    <div className="card text-right" style={{border: 'transparent'}}>
                        
                            <a href="javascript:void(0)" className="my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                </svg>
                            </a>
            
                        </div>
                        <div className="card text-right" style={{border: 'transparent'}}>
                        
                            <a href="javascript:void(0)" className="my-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stack-overflow" viewBox="0 0 16 16">
                                <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z"/>
                                <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z"/>
                                </svg>
                            </a>
            
                        </div>
                </div>
                </div>
                <hr style={{color:'lightgray'}} />
                <div className="row text-center">
                <div className="col" onClick={expand} style={{cursor: 'pointer', userSelect: 'none'}}>
                    <small id="m_details">More Details</small>
                    <svg xmlns="http://www.w3.org/2000/svg" id="down" style={display_style_icondown} width="20" height="20" fill="currentColor" className="bi bi-chevron-down mx-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" id="up" style={display_style_iconup} width="20" height="20" fill="currentColor" className="bi bi-chevron-up mx-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                        </svg>

                    
                </div>
            
                    
                </div>
                <div className="container text-left" id="more_details" style={display_style_card}>
                <div className="row">
                    <div className="col">
                        <p style={{margin: '0', fontSize: 'small'}}> <span style={{fontWeight: 'bolder'}} className="mr-1">Date Created:</span>  15th January, 2022</p>
                <p style={{margin: '0', fontSize: 'small'}}><span style={{fontWeight: 'bolder'}} className="mr-1">Maintanence Type:</span> Maintanence C</p>
                <p style={{margin: '0', fontSize: 'small'}}><span style={{fontWeight: 'bolder'}} className="mr-1">Docuements Repository:</span> <a href="javascript:void(0)">Link to Repository</a></p>
                    </div>
                    <div className="col">
                        <p style={{margin: '0', fontSize: 'small'}}> <span style={{fontWeight: 'bolder'}} className="mr-1">Last Update Date:</span>  28th January, 2022</p>
                        <p style={{margin: '0', fontSize: 'small'}}><span style={{fontWeight: 'bolder'}} className="mr-1">Project Update:</span> Finished working on paint and now working on engine oil.</p>
                        <p style={{margin: '0', fontSize: 'small'}}> <span style={{fontWeight: 'bolder'}} className="mr-1">Aircraft #:</span>  123456789</p>
                        
                    </div>
                </div>
                </div>
                
            </div>
        </div>
           
        
    </>
  )
}

export default Team_project_card