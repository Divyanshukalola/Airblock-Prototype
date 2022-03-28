import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Tracker from "./Tracker";
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";


// Importing json data
import sampleDFTool from '../components/Data/SampleDfTool.json';

// Component
import Navigation_H from "./Navigation_H";
import Assest_type from "./New Asset/Asset_type";
import Assest_description from "./New Asset/Asset_description";
import Register_asset from "./New Asset/Register_asset";



// icons
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsFillHddNetworkFill } from "react-icons/bs";
import { render } from "react-dom";


const App = () => {
    // Counter is a state initialized to 0
    const [count, setCounter] = useState(0)

    // Function is called everytime increment button is clicked
    const onNext = () => {
        // Counter state is incremented
        if (count < 2) {
            setCounter(count + 1)
        }

    }

    const onBack = () => {
        // Counter state is incremented
        if (count > 0) {
            setCounter(count - 1)
        }

    }



    const { register, handleSubmit, getValues, control } = useForm({});
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
const navigate = useNavigate();

    function onClickSubmit() {

        var today = new Date();
        var ManuDate = new Date(getValues('manu_date1'));


        const df = {
            "tool": getValues('name'),
            "PN": getValues('part_number'),
            "SN": getValues('serial_number'),
            "Description": getValues('descp'),
            "Operator": getValues('operator'),
            "Admin": getValues('admin'),
            "CreatedDate": (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear(),
            "ServiceStatus": getValues('asset_service_type'),
            "LastService": getValues('part_number'), // Change this <--------
            "ManuDate": (ManuDate.getMonth() + 1) + '/' + ManuDate.getDate() + '/' + ManuDate.getFullYear(),
            "Owner": getValues('owner'),
            "Status": getValues('status'),
            "Reason": getValues('reason'),
            "Update": getValues('update') ? getValues('update') : 'N/A',
            "Location": getValues('location'),
            "cord": {
                "lat": 41.3797,
                "lng": 2.1682
            }

        };

        // sampleDFTool.push(df)
        console.log(sampleDFTool);
        // alert(JSON.stringify(df));

        navigate('/');



    }



    return (
        <div>
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col'>


                    <Navigation_H></Navigation_H>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mx-1">
                            <div className="col">
                                <div className="card my-1 bg-white shadow" style={{ borderRadius: '20px', border: 'transparent' }}>
                                    <div className="card-body mx-2 mt-3">
                                        <div className='row'>
                                            <div className='col-3'>
                                                {/* Type of Asset */}
                                                <div className="card" style={{ width: '15rem', backgroundColor: (count == 0) ? '#F5F5F5' : 'transparent' }} >
                                                    <div className="card-body">
                                                        <div className='row'>
                                                            <div className='col-3'>
                                                                <BsFillHandIndexThumbFill style={{ fontSize: '25px' }} className='mt-2'></BsFillHandIndexThumbFill>
                                                            </div>
                                                            <div className='col'>
                                                                <h6 className="card-title">Type of Asset</h6>
                                                                <p className="card-text" style={{ fontSize: '11px', color: '#B8B8B8' }}>Upload the assest Image</p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-3'>
                                                {/* Asset Description */}
                                                <div className="card" style={{ width: '15rem', backgroundColor: (count == 1) ? '#F5F5F5' : 'transparent' }} >
                                                    <div className="card-body">
                                                        <div className='row'>
                                                            <div className='col-3'>
                                                                <BsFillInfoSquareFill style={{ fontSize: '25px' }} className='mt-2'></BsFillInfoSquareFill>
                                                            </div>
                                                            <div className='col'>
                                                                <h6 className="card-title">Asset Description</h6>
                                                                <p className="card-text" style={{ fontSize: '11px', color: '#B8B8B8' }}>Upload the assest Image</p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                {/* Regsiter Asset */}
                                                <div className="card" style={{ width: '15rem', backgroundColor: (count == 2 || count > 2) ? '#F5F5F5' : 'transparent' }} >
                                                    <div className="card-body">
                                                        <div className='row'>
                                                            <div className='col-3'>
                                                                <BsFillHddNetworkFill style={{ fontSize: '25px' }} className='mt-2'></BsFillHddNetworkFill>
                                                            </div>
                                                            <div className='col'>
                                                                <h6 className="card-title">Regsiter Asset</h6>
                                                                <p className="card-text" style={{ fontSize: '11px', color: '#B8B8B8' }}>Upload the assest Image</p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        {/* Type of Asset */}

                                        {count == 0 ? <Assest_type register={register}></Assest_type> : null}


                                        {/* Asset Description */}
                                        {count == 1 ? <Assest_description register={register} control={control} getValues={getValues}></Assest_description> : null}

                                        {/* Regsiter Asset */}
                                        {count >= 2 ? <Register_asset getValues={getValues}></Register_asset> : null}




                                        <hr />

                                        { }

                                        <div style={{ textAlign: 'center' }}>
                                            <button type="button" className="btn btn-secondary mx-3" onClick={onBack} >Go Back</button>

                                            {count == 2 ? <button type="button" className="btn btn-primary" onClick={onClickSubmit} >Submit</button> : <button type="button" className="btn btn-secondary" onClick={onNext} >Next</button>}
                                        </div>


                                    </div>


                                </div>
                            </div>
                        </div>

                    </form>



                </div>
                <div className='col-1'>

                </div>
            </div>

        </div>
    )
}

export default App
