// Created By: Divyanshu Kalola
// Description: The file contains view of Profile
// Component List: [Team_side_nav,Team_footer]
// Things TODO: Add edit feature

import React, { useState, useEffect } from "react";

import { Auth } from 'aws-amplify';

//componenets
import Team_side_nav from './Team_side_nav_servicer'
import Team_footer from '../Team_footer'

// icons
import { BsSearch } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";

// import { BsFillGrid1X2Fill } from "react-icons/bs";



const Servicer_profile = () => {

    async function logout(){
        try {
        await Auth.signOut();

        } catch (error) {
            console.log('error signing out: ', error);
        }
    }



  return (
    <>
        {/* Servicer Team Dashboard  */}
         <div style={{backgroundColor: 'rgb(246, 246, 250)',height:'100%'}}>
                                    <div className="container mt-5" style={{fontWeight: 'bolder'}}>
                                        <h3>Profile</h3>
                                    </div>

                                    <div class="row">
                                        <div class="col-5 mt-5">
                                            <hr/>
                                        </div>
                                        <div class="col-2 text-center">
                                            <img src="https://chrisreining.com/wp-content/uploads/2017/08/Chris-Reining-01-Square.jpg" alt="" height="150" width="150" class="shadow"  style={{borderRadius: '50%', borderColor: 'rgba(97, 97, 97, 0)',  borderStyle:'dashed'}}/>
                                        </div>
                                        <div class="col-5 mt-5">
                                            <hr/>
                                        </div>
                                    </div>

                                    <div className="card mt-3 border" style={{backgroundColor: 'rgb(252, 252, 255)'}}>
                                        <div className="body">

                                           
                                          
                                            <div className="row">
                                                <div className="col">
                                                    <div className="card mx-3 my-3" >
                                                        <div className="card-body">
                                                        <div className="row">
                                                           
                                                            <div className="col">
                                                                <p style={{margin: '7px'}}><b><b>Name: </b></b>Henry Colin</p>
                                                                <p style={{margin: '7px'}}><b><b>DOB: </b></b>12/12/2000</p>
                                                                <p style={{margin: '7px'}}><b><b>Gender: </b></b>Male</p>
                                                                <p style={{margin: '7px'}}><b><b>Work Location: </b></b>Chicago, IL</p>

                                                                



                                                            </div>
                                                            <div className="col">
                                                                <p style={{margin: '7px'}}><b><b>Phone Number: </b></b>+1 1234567890</p>
                                                                <p style={{margin: '7px'}}><b><b>Organization: </b></b>ABC</p>
                                                                <p style={{margin: '7px'}}><b><b>Liscense Number: </b></b>12345ABCD</p>
                                                                <p style={{margin: '7px'}}><b><b>Liscense Exp Date: </b></b>1/12/2024</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col">
                                                                <p style={{margin: '7px'}}><b><b>About Your Project : </b></b></p><p style={{margin: '7px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, purus a interdum finibus, ante est condimentum lorem, in eleifend massa odio eget libero. Praesent ultricies porta ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ligula ligula, cursus sed neque a, ornare ultricies felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut magna ligula. Vivamus erat est, consequat vitae lectus at, pharetra efficitur augue. Praesent non vehicula sem. Aenean eget quam et sapien semper elementum non eu mi.</p>
                                                                <p style={{margin: '7px'}}><b><b>Project Status: </b></b>Stage 3 (Validation)</p>
                                                            </div>
                                                        </div>

                                                        <hr />
                                                        <div className="row text-center">
                                                            <div className="col">
                                                                <button type="button" onClick={logout} class="btn btn-danger">Logout</button>
                                                            </div>
                                                        </div>

                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   <Team_footer ></Team_footer>
                                </div>
           
        
    </>
  )
}

export default Servicer_profile