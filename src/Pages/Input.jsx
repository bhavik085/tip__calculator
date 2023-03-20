import React, { useState } from 'react'
import Output from './Output';

const Input = (props) => {
  
const[state , setState] = useState("");

const handleChange=(event)=>{
   setState(event.target.value)
}


  return (

    <div>
    <div style={{border : "2px solid green" ,
    width: "100%",
    height:"250px"}}>
      <h3>Enter your Bill Amount</h3> 
      <input type="text" className="form-control"  id="floatingInput" placeholder="Enter Amount"></input>

      <hr style={{marginTop: "30px"}}></hr>
      <div className="row align-items-center">
    <div className="col">
      How was the service
    </div>
    <div className="col">
    <select className="form-select" id="floatingSelectGrid">
            <option selected="">Open this select menu</option>
            <option value="1">Very good - 20%</option>
            <option value="2">Good - 10%</option>
            <option value="3">Average - 5% </option>
          </select>
    </div>
    <div className="col">
    <input type="text" onChange={handleChange}     className="form-control"  id="floatingInput" placeholder="Enter Customer"></input>

    </div>
    <div className="col">
    <button type="button" onClick={()=>props.addtolist(state)}  className="btn btn-primary">Add Customers</button>
     
    
    </div>
    
  </div>
      
      </div>

      <Output/>


</div>
  )
}

export default Input