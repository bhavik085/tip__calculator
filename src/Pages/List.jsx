import React from 'react';
import { useState } from 'react';
export default function List(props) {
  const [total, settotal] = useState(0);
  let Sum = 0;
  const onclick = () => {
    props.data.map((ele) => {
      Sum += ele.Bill * ele.Service;
      // console.log(Sum);
      settotal(Sum);
    });

    /* console.log(props.data)
     for (let i = 0; i < props.data.length; i++) {
     console.log(props.data)
     settotal(total + props.data[i].Bill + props.data[i].Service);
     }*/
  };
  return (
    <>
      <div
        style={{ border: '3px solid rgb(240, 25, 61)' }}
        className="d-flex flex-column align-items-center"
      >
        <h3>Customer List</h3>

        <div className={'col-md-6'}>
          <ul className={'list-group d-flex flex-column align-items-center'}>
            {props.data.map((ele) => (
              <li>
                {ele.Name} Offring a tip of {ele.Bill * ele.Service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center">
        <button className={'btn btn-success '} onClick={onclick}>
          Calculate
        </button>
      </div>

      <div >
        <table style={{textAlign:"center"}} className="table table-striped">
          <thead>
            <tr>
              <td scope="col">Total Customer</td>
              <td scope="col">Tip</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.data.length}</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
