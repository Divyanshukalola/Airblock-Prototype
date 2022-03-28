import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";



// import { BsFillGrid1X2Fill } from "react-icons/bs";



const LogIn_form1 = ({register}) => {

  

  return (
    <>
        
                    <h4>Tell us more about yourself!</h4>
                    <hr/>

                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">First Name</label>
                                    <input type="text" class="form-control"  placeholder="First Name" {...register('first_name')}/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Last Name</label>
                                    <input type="text" class="form-control"  placeholder="Last Name" {...register('last_name')}/>
                                </div>
                            </div>
                        </div>

                        
                     
                        <div class="row mt-2">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Date of Birth</label>
                                    <input type="text" class="form-control" 
                                        placeholder="MM/DD/YYYY" {...register('DOB')}/>
                                </div>
                            </div>
                           <div class="col">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Gender</label>
                                    <select class="form-control" id="exampleFormControlSelect1" {...register('Gender')}>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Transgender</option>
                                        <option>Non-binary/non-conforming</option>
                                        <option>Prefer not to respond</option>
                                
                                    </select>
                                    <small id="emailHelp" class="form-text text-muted">You have the option to choose "Prefer not to respond".</small>
                                </div>
                           </div>
                        </div>


                        <div class="row mt-2">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Phone Number</label>
                                    <input type="text" class="form-control"  placeholder="Phone Number" {...register('phone_number')}/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Organization</label>
                                    <input type="text" class="form-control"  placeholder="Organization" {...register('organization')}/>
                                </div>
                            </div>
                        </div>

                       









       
           
        
    </>
  )
}

export default LogIn_form1