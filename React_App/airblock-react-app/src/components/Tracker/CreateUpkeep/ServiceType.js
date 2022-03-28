// Created By: Divyanshu Kalola
// Description: The file contains main view of selecting the service type in create upkeep form.
// Component List: []
// Things TODO: 

import React, { useState } from "react";


const ServiceType = ({register}) => {
    



  
  return (
    <div>

        <div className="row">
            <div className="col">
                <div className="card my-1 bg-light " style={{borderRadius: '10px', border: 'transparent'}}>
                    <div className="card-body mx-2 mt-3">
                        <div className="row">
                            <div className="col">
                                <div className="form-group" style={{width: '500px'}}>
                                    <p>Select the type of servicer:</p>
                                    <select className="form-control" id="exampleFormControlSelect1" {...register('ServicerType')} >
                                        <option>Internal</option>
                                        <option>External</option>
                                        
                                    </select>
                                    <small style={{fontSize: '11px'}} className='mt-2'>Select the type of servicer. Here you can select if you want to submit the Upkeep request to an internal servicer or an external servicer.</small>
                                </div>


        
                            </div>
                            
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default ServiceType