import React, { useState, useEffect } from "react";

//componenets
import Team_side_nav from './Servicer/Team_side_nav_servicer'

// icons
import { BsSearch } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";

// import { BsFillGrid1X2Fill } from "react-icons/bs";



const Team_footer = () => {



  return (
    <>
        {/* Servicer Team Footer  */}
        <div className="row my-3 mt-5">
            <div className="col">
                <p className="ml-3" style={{color: '#949494'}}> &#169; Copyright Airblock</p>
            </div>
            <div className="col" >
                <a href="javascript:void(0)" style={{textDecoration: 'none', color: 'black'}} className="mx-3">Home</a>
                <a href="javascript:void(0)" style={{textDecoration: 'none', color: 'black'}} className="mx-3">About Us</a>
                <a href="javascript:void(0)" style={{textDecoration: 'none', color: 'black'}} className="mx-3">Contact Us</a>
                <a href="javascript:void(0)" style={{textDecoration: 'none', color: 'black'}}className="mx-3">Terms and Conditions</a>
            </div>
        </div>
           
        
    </>
  )
}

export default Team_footer