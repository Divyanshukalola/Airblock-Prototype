import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";



// import { BsFillGrid1X2Fill } from "react-icons/bs";



const LogIn_form3 = ({register}) => {

  return (
    <>

                    <h4>Tell us more about yourself! (Optional)</h4>
                    <hr/>

                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Tell us about your project</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" {...register('about_project')}></textarea>
                                </div>
                            </div>
                          
                        </div>



                        <div class="row mt-2">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Project Status</label>
                                    <input type="text" class="form-control" placeholder="Status" {...register('project_status')}/>
                                    
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Profession</label>
                                    <input type="text" class="form-control" placeholder="Profession" {...register('profession')}/>
                                
                                </div>
                            </div>
                        </div>


                        <div class="row mt-2">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Country of Birth</label>
                                    <input type="text" class="form-control" placeholder="Type here.." {...register('country_of_birth')}/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">City of birth</label>
                                    <input type="text" class="form-control" placeholder="Type here.. " {...register('city_of_birth')}/>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Health Insurance if any</label>
                                    <input type="text" class="form-control" placeholder="Type here.." {...register('health_insurance')}/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Retirement insurance</label>
                                    <input type="text" class="form-control" placeholder="Type here.. " {...register('retirement_insurance')}/>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Mailing Address</label>
                                    <input type="text" class="form-control" placeholder="Street, City, Pin, Country" {...register('address')}/>
                                    <small id="emailHelp" class="form-text text-muted">Format: Street, City, Pin Code, Country</small>
                                </div>
                            </div>
                        
                        </div>





                       
   


       
           
        
    </>
  )
}

export default LogIn_form3