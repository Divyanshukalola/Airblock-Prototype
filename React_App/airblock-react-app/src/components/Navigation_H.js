import React from 'react';
import { Auth } from 'aws-amplify';

import { BsArrowBarRight } from "react-icons/bs";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";


const Navigation_H = () => {

  const name = "Jack Ryan";
  const user_image_link = "https://www.w3schools.com/howto/img_avatar.png";

const navigate = useNavigate();
   async function signOut() {
    try {
        await Auth.signOut();

    } catch (error) {
        console.log('error signing out: ', error);
    }
}

  return (
    <div>
        {/* navigation  */}
        
                <div className="card m-3 shadow sticky-top tex" style={{ borderRadius: '20px', borderColor: 'transparent', backgroundColor: 'rgba(255, 255, 255, 0.863)',backdropFilter:'blur(6px)'}} >
                  <nav className="navbar navbar-expand-lg navbar-light bg-transparent card" style={{border:'transparent'}}>
                      <div className="container-fluid">
                                <a className="navbar-brand" href="javascript:void(0)">
                                    <img src={require("../static/img/tp_background.png")} width="150" height="50" alt='logo'/>
                                </a>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>


                                <div className="collapse navbar-collapse" >
                                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                  <li className="nav-item ml-5 mr-3">
                                      <a className="nav-link" aria-current="page" href="javascript:void(0)">Dashboard</a>
                                  </li>
                                  <li className="nav-item mr-3">
                                      <a className="nav-link" href="javascript:void(0)">Tracker</a>
                                  </li>
                                
                                  <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Find Me
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <li><a className="dropdown-item" href="javascript:void(0)">Find Servicer</a></li>
                                      <li><a className="dropdown-item" href="javascript:void(0)">Find Parts</a></li>
                                      </ul>
                                  </li>

            
                              
                                  </ul>

                                <div style={{float:'right'}}>
                                     

                                <div className="collapse navbar-collapse"  style={{float:'right'}}>
                                    <a  href="../Common/notification.html" className="mx-3"style={{ textDecoration:'none'}} >
                                        <img src={require("../static/img/bell.png")} width="18" height="20" alt='bell'/>
                                    </a>

                                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                         <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span class="mx-3" style={{color:'black',marginRight:'50px'}}>{name}</span>
                                                

                                                <img src={user_image_link} width="50" className="rounded-circle border" height="50" alt='avatar'/>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                               
                                                <li>
                                                    <a href="javascript:void(0)" onClick={signOut} className="mx-3"style={{ textDecoration:'none',marginRight:'30px'}} >
                                                <BsArrowBarRight style={{color:'black', fontSize:'20px'}}></BsArrowBarRight>
                                                    <span className='mx-3' style={{color:'black'}}>Logout</span>
                                                    </a>
                                                
                                                </li>
                                            </ul>
                                        </li>

                                  </ul>
                                </div>

                                </div>

                               


                                </div>


                                 

                                







                      </div>

                  </nav>
                </div>
           
        
    </div>
  )
}

export default Navigation_H