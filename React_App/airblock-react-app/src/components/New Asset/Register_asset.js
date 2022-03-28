// Created By: Divyanshu Kalola
// Description: The file contains main view of registing asset  in add asset form.
// Component List: []
// Things TODO: 

import React from 'react'

const add_assets = ({getValues}) => {

    var today = new Date();
    var ManuDate = new Date(getValues('manu_date1'));

    var mDate = (ManuDate.getMonth() + 1) + '/' + ManuDate.getDate() + '/' + ManuDate.getFullYear();
    var tDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
   
  return (
    <div>

        <div className="row">
            <div className="col">
                <div className="card my-1 bg-light " style={{borderRadius: '10px', border: 'transparent'}}>
                    <div className="card-body mx-2 mt-3">
                        <h5>Register Assest</h5>
                        <hr />
                        <div className='row' style={{textAlign:"center"}}>
                            <div className='col'>
                                
                            </div>
                        </div>
                        <p>Asset Type: {(getValues("asset_type"))}</p>

                        <div className='row'>
                            <div className='col'>
                                <p>Name: <span style={{color:'grey'}}>{(getValues("name"))}</span></p>
                                <p>Owner: <span style={{color:'grey'}}>{(getValues("owner"))}</span></p>
                                <p>Admin: <span style={{color:'grey'}}>{(getValues("admin"))}</span></p>
                                <p>Manufactoring Date: <span style={{color:'grey'}}>{mDate}</span></p>
                            </div>


                            <div className='col'>
                                <p>Part Number: <span style={{color:'grey'}}>{(getValues("part_number"))}</span></p>
                                <p>Serial Number: <span style={{color:'grey'}}>{(getValues("serial_number"))}</span></p>
                                <p>Operator: <span style={{color:'grey'}}>{(getValues("operator"))}</span></p>
                                <p>Last Up keep date: <span style={{color:'grey'}}>{tDate}</span></p>
                            </div>


                            <div className='col' style={{textAlign:"center"}}>

                                {getValues("asset_type")==='T'?
                                <img src={require('../../static/img/tool_default.png')} alt="tool" height="150px" />
                                :null
                                }

                                {getValues("asset_type")==='OT'?
                                <img src={require('../../static/img/tool_default.png')} alt="tool" height="150px" />
                                :null
                                }

                                {getValues("asset_type")==='A'?
                                <img src={require('../../static/img/sample.png')} alt="tool" height="150px" />
                                :null
                                }

                                {getValues("asset_type")==='APU'?
                                <img src={require('../../static/img/tool_default.png')} alt="tool" height="150px" />
                                :null
                                }

                                {getValues("asset_type")==='E'?
                                <img src={require('../../static/img/engine_default.png')} alt="tool" height="150px" />
                                :null
                                }
                                
                            </div>
                        </div>
                        <hr style={{color:'grey'}} />
                        <div className='row'>
                            <div className='col'>
                                <p>Select the type of availability: <span style={{color:'grey'}}>{(getValues("availability"))}</span></p>
                                {getValues("asset_service_type")==='GN1'?
                                    <p>Reason:  <span style={{color:'grey'}}>{(getValues("reason"))}</span></p>
                                :null}

                                {getValues("asset_service_type")==='NM'?
                                <>
                                    <p>Status: <span style={{color:'grey'}}>{(getValues("status"))}</span></p>
                                    <p>Reason:  <span style={{color:'grey'}}>{(getValues("reason"))}</span></p>
                                </>
                                   

                                :null}

                                {getValues("asset_service_type")==='IM'?
                                    <>
                                        <p>Update: <span style={{color:'grey'}}>{(getValues("update"))}</span></p>
                                        <p>Reason:  <span style={{color:'grey'}}>{(getValues("reason"))}</span></p>
                                    </>
                                   

                                :null}

                                
                            </div>
                            <div className='col'>
                                <p style={{fontSize:"18px"}}>Location: <span style={{color:'grey'}}>{(getValues("location"))}</span></p>
                            </div>
                        </div>
                        <hr style={{color:'grey'}} />

                    <p style={{fontSize:'13px',textAlign:'center'}}>Make sure that the information is correct is not you can go back and change the values of the fields.</p>
                    <p style={{fontSize:'13px',textAlign:'center'}}>Once you are satisfied please click the submit button.</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default add_assets