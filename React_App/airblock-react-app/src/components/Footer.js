import React, { useState } from "react";





// icons
// import { BsFillHandIndexThumbFill } from "react-icons/bs";



const Footer = () => {

return (
	<>
        <footer>
        <div className="row mx-5 my-3 mt-5">
            <div className="col-5">
                <p style={{color: '#949494'}}> &copy; Copyright Airblock</p>
            </div>
            <div className="col">
                <a href="javascript:void(0)" style={{textDecoration: 'none', color: 'black'}} className="mx-4">Home</a>
                <a href="javascript:void(0)" style={{textDecoration: 'none', color: 'black'}}className="mx-4">About Us</a>
                <a href="javascript:void(0)" style={{textDecoration: 'none', color: 'black'}} className="mx-4">Contact Us</a>
                <a href="javascript:void(0)" style={{textDecoration: 'none', color: 'black'}} className="mx-4">Terms and Conditions</a>
            </div>
        </div>
     
    </footer>
          
	</>
)
}

export default Footer
