// Created By: Divyanshu Kalola
// Description: The file contains main view of submit the service in create upkeep form.
// Component List: []
// Things TODO: 

import React from 'react'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const SubmitService = ({register,getValues}) => {

    const text = 'A RFQ has been created for: \n\rTool- GSE3\nPN: 123456781\nSN: 5789565466\n\rScheduled Inspection (6 months period)\nScheduled Maintenance (12 months period)\nHard return date: 01/22/2022\n\rAdmin additional comments:\nPlease send a quote to perfom task I235536Q3 in accordance with Maitenancce manual attached.\n\rThanks.';

  return (
    <div>

        <div className="row">
            <div className="col">
                <div className="card my-1 bg-light " style={{borderRadius: '10px', border: 'transparent'}}>
                    <div className="card-body mx-2 mt-3">
                        <h5>Submit Request</h5>
                        <hr />



                        <div className="row">
                            <div className="col">
                                    <div className="form-group">
                                        <label >Email to:</label>
                                        <input type="text" className="form-control" id="exampleCheck1" placeholder="Emails" {...register('email_id')} value={getValues("servicer")?getValues("servicer").map((df) => {return (" "+df + " ")}):null} />
                                    </div>
                                    <br />

                                    <div className="form-group">
                                    <textarea className="form-control" rows="20" {...register('email')}  >{text}</textarea>
                                </div>
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

export default SubmitService