import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";


// import { BsFillGrid1X2Fill } from "react-icons/bs";



const LogIn = () => {

    const [loading, setLoading] = useState(false);


    const { register, getValues, control } = useForm({});

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await Auth.signIn(getValues('email'), getValues('password'));
            // Toast("Success!!", "Login Successfully", "success");
            console.log('Success!!')
            navigate('/');


        }
        catch (error) {
            // Toast("Error!!", error.message, "danger");
            console.log('Error!!')
        }
        setLoading(false);
    };



  return (
    <>
        {/* Login  */}


        <div class="row mt-1 mx-5">
            <div class="col-1 text-right mt-1">
                <img src={require('../../static/img/cube.png')} alt="" height="50"/>
                
            </div>
            <div class="col mt-3">
                <h5>Airblock Technologies</h5>
            </div>
        </div>





        {/* body */}


         <div class="row mt-5">
            <div class="col-6 mt-5 text-center" style={{top: '50%'}}>
                <img  src="https://img.freepik.com/free-vector/modern-isometric-illustration-design-data-analysis_145666-640.jpg" alt="" width="700"/>
            </div>
            <div class="col-6 mt-5">
                <div class="card mx-4 shadow" style={{border: 'transparent'}}>
                    <div class="card-body">
                        <h4>Login</h4>
                        <hr/>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" 
                                {...register("email", {required: 'error message'})} 
                                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

                            </div>
                            <br/>
                          
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control"
                                         {...register("password", {required: 'error message'})} 
                                         id="exampleInputPassword1" placeholder="Password"/>
                                    </div>
                                </div>
                               
                            </div>
                            
                        
                           
                            <br/>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                
                            </div>
                            <br />
                            <div class="text-center">
                                <a href="javascript:void(0)">Forgot you Password?</a>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
         </div>
       
           
        
    </>
  )
}

export default LogIn