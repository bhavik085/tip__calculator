import React from 'react'

const Output = (props) => {

  return (
    <div>
       <div style={{border: "2px solid #d90166" ,
    width: "100%",
    height: "150px"}}>
      <h1>Customer List</h1>
      <hr></hr>
      <ul style={{float: "left"}}>
      {/* {props.list.map((ele, i) => (
        <li  key={i}>{ele}</li>   
        ))} */}
      </ul>
      
      
      
      
    </div>
    <button type="button" className="btn btn-primary">Calculate Tip & Customers</button>

    <div>
    <div style={{border: "2px solid #d90166" ,
    width: "100%",
    height: "100px"}}>
      <table className= "table" style={{width:"100%"}}>
  <tr>
    <th>TotalCustomer</th>
    <th>Tip</th> 
    
  </tr>
  <tr>
    <td>Bhavik</td>
    <td>50$</td>
    
  </tr>
  
  
</table>
      </div>
    </div>
    </div>
    
    
  )
}

export default Output

