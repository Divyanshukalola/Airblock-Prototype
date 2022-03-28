import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";

import Login_form1 from "./Login_form1";
import Login_form2 from "./Login_form2";
import Login_form3 from "./Login_form3";
import DF_visual from "../DF_visual"

// import { BsFillGrid1X2Fill } from "react-icons/bs";



const LogIn_form1 = () => {

    const [count, setCount] = useState(1);
    const { register, handleSubmit, getValues, control } = useForm({});

    function clickHandle(){
        if (count < 4){
            setCount(count +1);
        }else{
            setCount(1);
        }



    }

    console.log(getValues()) // Displays all data values from the form.

  return (
    <>
        {/* Login  */}


        <div class="row mt-3 mx-5">
            <div class="col-1 text-right mt-1">
                <img src={require('../../static/img/cube.png')} alt="" height="50"/>
                
            </div>
            <div class="col mt-3">
                <h5>Airblock Technologies</h5>
            </div>
        </div>





        {/* body */}

    <div class="row mt-5">
        <div class="col-6 mt-1 text-center" style={{top: '50%'}}>
            <img src="https://www.pngitem.com/pimgs/m/479-4797779_web1shadow-isometric-illustration-png-transparent-png.png"
                alt="" width="600"/>
        </div>
        <div class="col-6 mt-5">
            <div class="card mx-4 shadow" style={{border: 'transparent'}}>
                {/* forms here  */}
                <div class="card-body">
                    {count === 1?<Login_form1 register={register}/>:null}
                    {count === 2?<Login_form2 register={register}/>:null}
                    {count === 3?<Login_form3 register={register}/>:null}
                    {count === 4?<DF_visual getValues={getValues}/>:null}
                    
                    <br/>
                    <div class="text-center">
                        <button onClick={clickHandle} class="btn btn-primary">{count === 3?<span>Submit</span>:<span>Next</span>}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    


       
           
        
    </>
  )
}

export default LogIn_form1