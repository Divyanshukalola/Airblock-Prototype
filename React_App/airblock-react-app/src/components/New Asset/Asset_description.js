// Created By: Divyanshu Kalola
// Description: The file contains main view of adding asset description in add asset form.
// Component List: []
// Things TODO: 

import React, { useState } from "react";

//UI object imports 
import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";


// React hook form imports
import { Controller } from "react-hook-form";




const Add_assets  = ({register , control,getValues}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [manuDate, setManuDate] = useState(new Date());

  return (
    <div>
        <div className="row">
            <div className="col">
                <div className="card my-1 bg-light " style={{borderRadius: '20px', border: 'transparent'}}>
                    <div className="card-body mx-2 mt-3">
                       
                        <div className='row'>
                            <div className='col'>
                                 <div className="form-group mb-3">
                                    <label htmlFor="OEM">Name : </label>
                                    <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Name" {...register('name')}/>

                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="owner">Owner: </label>
                                    <input type="text" className="form-control" id="owner" aria-describedby="emailHelp" placeholder="Owner" {...register('owner')} />

                                </div>

                                 <div className="form-group mb-3">
                                    <label htmlFor="manu_date">Manufactoring Date:</label>
                                    {/* <input type="text" className="form-control" id="manu_date" aria-describedby="emailHelp" placeholder="Date" /> */}


                                     <Controller
                                        control={control}
                                        name="manu_date1"
                                        render={({ field }) => (
                                        <ReactDatePicker
                                            maxDate={getValues("upkeep_date1")}
                                            className="input form-control"
                                            placeholderText="Select date"
                                            onChange={(e) => field.onChange(e)}
                                            selected={field.value}
                                           
                                        />
                                        )}
                                    />

                                </div>
                            </div>





                            
                            <div className='col'>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">Part Number:</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Part Number" {...register('part_number')} />

                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">Operator:</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Operator" {...register('operator')}/>

                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">Last Up keep date:</label>

                                    <Controller
                                        control={control}
                                        name="upkeep_date1"
                                        render={({ field }) => (
                                        <ReactDatePicker
                                            minDate={getValues("manu_date1")}
                                            className="input form-control"
                                            placeholderText="Select date"
                                            onChange={(e) => field.onChange(e)}
                                            selected={field.value}
                                        />
                                        )}
                                    />

                                </div>
                            </div>







                            <div className='col'>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">Serial Number:</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Serial Number" {...register('serial_number')}/>

                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">Admin:</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Admin" {...register('admin')}/>

                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="exampleFormControlSelect1" >Select the type of availability:</label>
                                    <select className="form-control" id="exampleFormControlSelect1" {...register('availability')}>
                                    <option>Internal Only</option>
                                    <option>Rent</option>
                                    <option>Sell</option>
                                    <option>Interchange</option>
                                
                                    </select>
                                </div>

                            </div>





                               

                             

                                
                                

                        </div>
                        <hr />
                        <div className='row'>
                             <div className="col">
                                
                                <div className="form-group">
                                    {getValues("asset_service_type")==='GN1'?
                                        <>
                                              <label htmlFor="exampleInputEmail1" style={{ fontSize: '18px'}}>Reason: </label>
                                            <input type="text" className="form-control" placeholder="Reason ..." {...register('reason')}/>
                                        </>
                                      
                                    :null}
                                    {getValues("asset_service_type")==='NM'?
                                        <>
                                        <label htmlFor="exampleInputEmail1" style={{ fontSize: '18px'}}>Status: </label>
                                            <input type="text" className="form-control" placeholder="Status ..." {...register('status')}/>
                                            <br />
                                              <label htmlFor="exampleInputEmail1" style={{ fontSize: '18px'}}>Reason: </label>
                                            <input type="text" className="form-control" placeholder="Reason ..." {...register('reason')}/>
                                        </>
                                      
                                    :null}
                                     {getValues("asset_service_type")==='IM'?
                                        <>
                                        <label htmlFor="exampleInputEmail1" style={{ fontSize: '18px'}}>Update: </label>
                                              <select className="form-control" {...register('update')}>
                                                <option value='S1'>Stage 1</option>
                                                <option value='S2'>Stage 2</option>
                                                <option value='S3'>Stage 3</option>
                                                <option value='S4'>Stage 4</option>
                                            
                                                </select>
                                            <br />
                                              <label htmlFor="exampleInputEmail1" style={{ fontSize: '18px'}}>Reason: </label>
                                            <input type="text" className="form-control" placeholder="Reason ..." {...register('reason')}/>
                                        </>
                                      
                                    :null}
                                </div>
                                <br />            
                                
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" style={{ fontSize: '18px'}}>Location: </label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location" {...register('location')}/>

                                </div>

                                
                            </div>
                            <div className='col'>
                                <div className="form-group">
                                    <input type="file" style={{ display: 'none' }} id="contained-button-file"/>
                                    <p style={{marginBottom: '0px'}}>Upload your asset's Manufactoring Manual here:</p>
                                    <small style={{fontSize: '11px'}}>This file should not be larger than 10MB in size. Please make sure the quality of the file is at it best. If the file is not of its best quality we might ask you to upload it again.</small>
                                    <br />
                                        <label htmlFor="contained-button-file" className='mt-3'>
                                            <Button variant="contained" color="primary" component="span">
                                                Upload
                                            </Button>   
                                        </label>
                                </div>
                            </div>
                           
                        </div>




                    </div>
                </div>
                </div>
                </div>
        
            </div>
      
  );
};

export default Add_assets