// Created By: Divyanshu Kalola
// Description: The file contains main view of selecting asset type in add asset form.
// Component List: []
// Things TODO: 

import React, { useState } from "react";
import Button from '@material-ui/core/Button';

const Add_assets = ({register}) => {
    
  return (
    <div>

        <div className="row">
            <div className="col">
                <div className="card my-1 bg-light " style={{borderRadius: '10px', border: 'transparent'}}>
                    <div className="card-body mx-2 mt-3">
                        <div className="row">
                            <div className="col">
                                <div className="form-group" style={{width: '500px'}}>
                                    <p>Select the type of assest:</p>
                                    <select className="form-control" {...register('asset_type')} >
                                        <option value="T">Tools</option>
                                        {/* <option value="A">Aircraft</option> */}
                                        {/* <option value="E">Engine</option> */}
                                        {/* <option value="APU">APU</option> */}
                                        <option value="OT">Other Components</option>
                                        
                                    </select>
                                    </div>

        
                            </div>

                            <div className="col">
                                <div className="form-group" style={{width: '500px'}}>
                                    <p>Tool Service Status:</p>
                                    <select className="form-control"  {...register('asset_service_type')} >
                                        <option value="IF">In Use</option>
                                        <option value="IM">In Maintenance</option>
                                        <option value="NM">Need Maintenance</option>
                                        <option value="GN1">Suspended</option>

                                    </select>
                                    </div>
                            </div>
                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 ">
                                <div className="form-group" style={{width: 'auto'}}>
                                    <p>Description:</p>
                                    <textarea class="form-control" placeholder="Add the tool's description here ... "  {...register('descp')} rows="3"></textarea>
                                    </div>

        
                            </div>

                            
                        </div>
                        <div className='row my-3'>
                            <div className="col">

                                <div className="form-group">
                                    <input type="file" accept="image/*" style={{ display: 'none' }} id="contained-button-file" {...register('asset_img')}/>
                                    <p style={{marginBottom: '0px'}}>Upload your asset's image here:</p>
                                    <small style={{fontSize: '11px'}}>This image should not be larger than 10MB in size. Please make sure the asset is visible in the given image. If the asset is not visible we might ask you to upload it again.</small>
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
  )
}

export default Add_assets