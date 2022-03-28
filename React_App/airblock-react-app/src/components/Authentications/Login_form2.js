import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";



// import { BsFillGrid1X2Fill } from "react-icons/bs";



const LogIn_form2 = ({register}) => {
    
  return (
    <>

                    <h4>Tell us more about yourself!</h4>
                    <hr/>

                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">License type</label>
                                    <select class="form-control" id="exampleFormControlSelect1" {...register('liscense_type')}>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                      
                                
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">License Number</label>
                                    <input type="text" class="form-control" placeholder="License Number" {...register('liscense_number')}/>
                                </div>
                            </div>
                        </div>



                        <div class="row mt-2">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Expiring date</label>
                                    <input type="text" class="form-control"  placeholder="MM/DD/YYYY" {...register('exp_date')}/>
                                    <small id="emailHelp" class="form-text text-muted">Enter the date of expiration of your License.</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlFile1">Upload Photo of License</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" {...register('liscense_photo')}/>
                                </div>
                            </div>
                        </div>


                        <div class="row mt-2">
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Hiring Date</label>
                                    <input type="text" class="form-control" placeholder="MM/DD/YYYY" {...register('hiring_date')}/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Work's location</label>
                                    <input type="text" class="form-control" placeholder="Location" {...register('work_location')}/>
                                </div>
                            </div>
                        </div>

                      



                  





     

       
           
        
    </>
  )
}

export default LogIn_form2