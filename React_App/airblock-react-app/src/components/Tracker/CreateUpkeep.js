// Created By: Divyanshu Kalola
// Description: The file contains main view of create upkeep shift view form.
// Component List: [ServiceType,ServiceSelect,SubmitService]
// Things TODO: 


import React, { useState } from "react";
import { useForm } from "react-hook-form";


// Component import
import ServiceType  from './CreateUpkeep/ServiceType';
import ServiceSelect  from './CreateUpkeep/ServiceSelect';
import SubmitService  from './CreateUpkeep/SubmitService';



// icons import
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsFillHddNetworkFill } from "react-icons/bs";


const App = () => {
// Counter is a state initialized to 0
const [count, setCounter] = useState(0)

// Function is called everytime increment button is clicked
const onNext = () => {
	// Counter state is incremented
    if (count <2 ){
        setCounter(count + 1)
    }
	
}




const { register, handleSubmit, getValues ,control} = useForm({});
 const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };









return (
	<div>

        
	


<form onSubmit={handleSubmit(onSubmit)}>
           <div className="row mx-1">
                    <div className="col">
                        <div className="card my-1 bg-white shadow" style={{borderRadius: '20px', border: 'transparent'}}>
                            <div className="card-body mx-2 mt-3">
                                <div className='row'>
                                    <div className='col-3'>
                                        {/* Type of Asset */}
                                        <div className="card" style={{width: '15rem', backgroundColor: (count == 0)?'#F5F5F5':'transparent'}} >
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-3'>
                                                        <BsFillHandIndexThumbFill style={{fontSize: '25px'}} className='mt-2'></BsFillHandIndexThumbFill>
                                                    </div>
                                                     <div className='col'>
                                                        <h6 className="card-title">Type of Service</h6>
                                                        <p className="card-text" style={{ fontSize: '11px', color: '#B8B8B8'}}>Select the type of service</p>
                                                    </div>
                                                </div>
                                                
                                         
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                        {/* Asset Description */}
                                        <div className="card" style={{width: '15rem',backgroundColor: (count == 1)?'#F5F5F5':'transparent'}} >
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-3'>
                                                        <BsFillInfoSquareFill style={{fontSize: '25px'}} className='mt-2'></BsFillInfoSquareFill>
                                                    </div>
                                                     <div className='col'>
                                                        <h6 className="card-title">Select Service</h6>
                                                        <p className="card-text" style={{ fontSize: '11px', color: '#B8B8B8'}}>Upload the assest Image</p>
                                                    </div>
                                                </div>
                                                
                                         
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        {/* Regsiter Asset */}
                                        <div className="card" style={{width: '15rem',backgroundColor: (count == 2 || count >2)?'#F5F5F5':'transparent'}} >
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-3'>
                                                        <BsFillHddNetworkFill style={{fontSize: '25px'}} className='mt-2'></BsFillHddNetworkFill>
                                                    </div>
                                                     <div className='col'>
                                                        <h6 className="card-title">Submit Request</h6>
                                                        <p className="card-text" style={{ fontSize: '11px', color: '#B8B8B8'}}>Upload the assest Image</p>
                                                    </div>
                                                </div>
                                                
                                         
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            {/* Type of Asset */}
                           
                            {count == 0 ?<ServiceType register={register}></ServiceType>:null}
                          

                            {/* Asset Description */}
                            {count == 1?<ServiceSelect register={register} control ={control} ></ServiceSelect>:null}

                            {/* Regsiter Asset */}
                            {count >= 2?<SubmitService register={register} getValues={getValues}></SubmitService>: null}

                            
                            

                                <hr />

                                {}

                                <div style={{textAlign:'center'}}>
                                    {/* <button type="button" className="btn btn-secondary mx-3" onClick={onBack} >Go Back</button> */}
                                    
                                    {count == 2?<button type="button" className="btn btn-primary" onClick={() => {alert(JSON.stringify(getValues()));}} >Submit</button>:<button type="button" className="btn btn-secondary" onClick={onNext} >Next</button>}
                                </div>
                                
                                
                            </div>

                         
                        </div>
                    </div>
          </div>

</form>
          
	</div>
)
}

export default App
