// Created By: Divyanshu Kalola
// Description: The file contains main view of selecting asset type in add asset form.
// Component List: []
// Things TODO: 

import React, { useState } from "react";
import Button from '@material-ui/core/Button';

const DF_visual = ({getValues}) => {

  console.log(getValues())
    
  return (
    <div>
      <h5>DF Visual</h5>
      <pre>{JSON.stringify(getValues(), null, "\t")}</pre>
        
        
    </div>
  )
}

export default DF_visual