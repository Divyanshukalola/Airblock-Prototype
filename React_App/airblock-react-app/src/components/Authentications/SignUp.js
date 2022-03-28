import React, { Component } from 'react';
import FormErrors from "./../../utils/FormErrors";
import Validate from "./../../utils/FormValidation";
import { Auth } from "aws-amplify";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

class Register extends Component {
  state = {

    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    const {email, password } = this.state;
    const navigate = useNavigate();
    try {
      const signUpResponse = await Auth.signUp({
        email,
        password,
        
      });
      navigate('/');
      console.log(signUpResponse);
    } catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }
  }

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
        <>
         <div class="row mt-1 mx-5">
            <div class="col-1 text-right mt-1">
                <img src={require('../../static/img/cube.png')} alt="" height="50"/>
                
            </div>
            <div class="col mt-3">
                <h5>Airblock Technologies</h5>
            </div>
        </div>

        <FormErrors formerrors={this.state.errors} />


         {/* body */}


         <div class="row mt-5">
            <div class="col-6 mt-5 text-center" style={{top: '50%'}}>
                <img  src="https://img.freepik.com/free-vector/modern-isometric-illustration-design-data-analysis_145666-640.jpg" alt="" width="700"/>
            </div>
            <div class="col-6 mt-5">
                <div class="card mx-4 shadow" style={{border: 'transparent'}}>
                    <div class="card-body">
                        <h4>Register</h4>
                        <hr/>
                       <form onSubmit={this.handleSubmit}>




                <div class="form-group mb-3">
                    <label for="exampleInputEmail1">Enter your Email</label>
                     <input 
                  className="form-control" 
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group mb-3">
                    <label for="exampleInputEmail1">Select a Password</label>
                         <input 
                  className="form-control" 
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>


                <div class="form-group mb-3">
                    <label for="exampleInputEmail1">Confirm Your Password</label>
                        <input 
                        className="form-control" 
                        type="password"
                        id="confirmpassword"
                        placeholder="Confirm password"
                        value={this.state.confirmpassword}
                        onChange={this.onInputChange}
                        />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
               

           
        
            <div className="text-center">
              <p className="control">
                <a href="/forgotpassword">Already registered?</a>
              </p>
            </div>
            <div className="text-center">
              <p className="control">
                <button type="submit" class="btn btn-primary">
                  Register
                </button>
              </p>
            </div>
          </form>
                    </div>
                </div>
            </div>
         </div>
        </>
     
          

      
    );
  }
}

export default Register;









   