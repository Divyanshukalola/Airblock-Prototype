// Created By: Divyanshu Kalola
// Description: This the test module. Remove this in final production.
// Component List: []
// Things TODO: 


//react imports

import React, { useState, useEffect } from "react";



// Components Import



import {
  useNavigate
} from "react-router-dom";






function Select() {


const navigate = useNavigate();

function onClickServicer(){
    navigate('/team/Servicer');
}

function onClickOwner(){
    navigate('/tracker');
}
  
  function onClickWorker() {
    navigate("/team/Worker");
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="row my-5 text-center" style={{ float: "center" }}>
          <div className="col">
            <button
              type="button"
              onClick={onClickServicer}
              class="btn btn-primary"
            >
              Go to Servicer
            </button>
          </div>
        </div>
        <div className="row my-5 text-center" style={{ float: "center" }}>
          <div className="col">
            <button
              type="button"
              onClick={onClickWorker}
              class="btn btn-success"
            >
              Go to Worker
            </button>
          </div>
        </div>
        <div className="row my-5 text-center" style={{ float: "center" }}>
          <div className="col">
            <button
              type="button"
              onClick={onClickOwner}
              class="btn btn-secondary"
            >
              Go to Owner
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default (Select);
