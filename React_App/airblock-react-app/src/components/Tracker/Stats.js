// Created By: Divyanshu Kalola
// Description: The file contains main view of status bar on the tracker page.
// Component List: []
// Things TODO: 

import React, { useState } from "react";


const Tracker_stats = (props) => {

return (
	<div>

        <div className="card mx-3 my-3 bg-transparent" style={{borderRadius: '20px', border: 'transparent'}}>
            <div className="row">
                <div className="col text-center">
                    <div className="card my-1 bg-white shadow" style={{borderRadius: '20px', border: 'transparent', height: '110px'}}>
                        <div className="card-body mx-2 mt-3">
                            <div className="row">
                                <div className="col-6">
                                    <p style={{fontSize:'13px'}}># Assets Listed</p>
                                </div>
                                <div className="col mt-2 text-center">
                                    <h4>{props.total}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <div className="card my-1 bg-white shadow" style={{borderRadius: '20px', border: 'transparent', height: '110px'}}>
                        <div className="card-body mx-2 mt-3">
                            <div className="row">
                                <div className="col-6">
                                    <p style={{fontSize:'13px'}}>Tools not avialable</p>
                                </div>
                                <div className="col mt-2 text-center">
                                    <h4 style={{color: '#D20000'}}>{props.grounded}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <div className="card my-1 bg-white shadow" style={{borderRadius: '20px', border: 'transparent', height: '110px'}}>
                        <div className="card-body mx-2 mt-3">
                            <div className="row">
                                <div className="col-6">
                                    <p style={{fontSize:'13px'}}>Tools in maintenance</p>
                                </div>
                                <div className="col mt-2 text-center">
                                    <h4 style={{color: '#009e10'}}>{props.inMain}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <div className="card my-1 bg-white shadow" style={{borderRadius: '20px', border: 'transparent', height: '110px'}}>
                        <div className="card-body mx-2 mt-3">
                            <div className="row">
                                <div className="col-6">
                                    <p style={{fontSize:'13px'}}>Tools close to Upkeep period</p>
                                </div>
                                <div className="col mt-2 text-center">
                                    <h4 style={{color: '#a9ac00'}}>{props.nMain}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <div className="card my-1 bg-white shadow" style={{borderRadius: '20px', border: 'transparent', height: '110px'}}>
                        <div className="card-body mx-2 mt-3">
                            <div className="row">
                                <div className="col-6">
                                    <p style={{fontSize:'13px'}}>Tools in usage</p>
                                </div>
                                <div className="col mt-2 text-center">
                                    <h4 style={{color: '#a9ac00'}}>{props.nMain}</h4>
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

export default Tracker_stats
