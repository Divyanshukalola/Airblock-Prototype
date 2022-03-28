// Created By: Divyanshu Kalola
// Description: The file contains main view of selecting the service in create upkeep form.
// Component List: []
// Things TODO: 

import React, { useState } from "react";

//Date picker Import
import "react-datepicker/dist/react-datepicker.css";

//Import Sample DB
import  SampleDf  from "../../Data/SampleDfServicer.json"



const ServiceSelect  = ({register , control}) => {
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
                                <h6>Select Upkeep Type</h6>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register('Inspection')}/>
                                    <label className="form-check-label" htmlFor="exampleCheck1" >Inspection</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register('Mantenence')}/>
                                    <label className="form-check-label" htmlFor="exampleCheck1" >Mantenence</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register('Calibration')}/>
                                    <label className="form-check-label" htmlFor="exampleCheck1" >Calibration</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register('Repair')}/>
                                    <label className="form-check-label" htmlFor="exampleCheck1" >Repair</label>
                                </div>
                            </div>

                        </div>

                        <hr />
                         <div className='row'>
                            <div className='col'>
                                <h6>Select Servicer</h6>
                                <p style={{marginTop: '0', fontSize: '12px'}}>(you can select more than one to bid)</p>



                                 <div className="row">
                                    <div className="col">
                                        <h6><b>Servicer</b></h6>
                                        
                                    </div>
                                    <div className="col-3">
                                        <h6><b>Location</b></h6>

                                    </div>
                                    <div className="col-3">
                                        <h6><b>Estimated LT</b></h6>

                                    </div>
                                    <div className="col-3" style={{textAlign:'center'}}>
                                        <h6><b>Estimated Repairs Costs</b></h6>

                                    </div>
                                </div>

                                {SampleDf.map((df) => {
                                return (

                                    <div className="row" >
                                    <div className="col">

                                         <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" value={df.email} {...register('servicer')}/>
                                            <label className="form-check-label" forHtml="exampleCheck1" >{df.name}</label>
                                        </div>
                                    </div>
                                     <div className="col-3">
                                            <p style={{margin: '0'}}>{df.location}</p>

                                    </div>
                                    <div className="col-3">
                                            <p style={{margin: '0'}}>{df.AvgPropTime}</p>

                                    </div>
                                    <div className="col-3" style={{textAlign:'center'}}>
                                            <p style={{margin: '0'}}>{df.AvgPropCost}</p>

                                    </div>
                                </div>

                                );
                                })}



                                   <hr/>
                                    <div className="row">
                                        <div className="col">
                                            <h6><b>Return period: </b></h6>
                                            <div className="row">
                                                <div className="col-1">
                                                     <div className="form-check">
                                                        <input className="form-check-input" type="radio" {...register('Hard')}  checked/>
                                                        <label className="form-check-label" >
                                                            Hard
                                                        </label>
                                                        </div>
                                                        <div className="form-check">
                                                        <input className="form-check-input" type="radio" {...register('Flex')} />
                                                        <label className="form-check-label" >
                                                            Flex
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" id="exampleCheck1" placeholder="# Days" {...register('return_period')} style={{width:'200px'}}/>
                                                </div>
                                            </div>
                                            
                                           
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="row">
                                        <div className="col">
                                            <h6><b>Comments: </b></h6>
                                             <div className="form-group">

                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register('comments')}>
                                                  
                                                </textarea>
                                            </div>
                                        </div>
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

export default ServiceSelect