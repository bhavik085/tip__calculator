import React from 'react';
import { useState } from 'react';
import List from './List';

export default function Value() {
  const [input, setinput] = useState({
    Bill: '',
    Service: '',
    Name: '',
  });

  const inputChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const [itemsarray, setItemsArray] = useState([]);
  const onclick = () => {
    itemsarray.push(input);
    setItemsArray([...itemsarray]);
    // console.log(itemsarray);
    setinput({
      Bill: '',
      Service: '',
      Name: '',
    });
  };

  return (
    <>
      <div style={{ border:" 3px solid green"}} className={'container'}>
        <h6 style={{ textAlign: 'center', color: 'red' }}>
          Enter your bill amount
        </h6>

        <div className={'row'} style={{ marginTop: '40px' }}>
          <input
            type={'number'}
            className={'form-control'}
            name={'Bill'}
            placeholder={'Total Bill'}
            onChange={inputChange}
            value={input.Bill}
          />{' '}
        </div>

        <div
          style={{ margin: '3rem' }}
          className="d-flex flex-wrap justify-content-around align-items-center"
        >
          <label>How was service?</label>
          <select
            className={'col-md-3'}
            onChange={inputChange}
            name={'Service'}
            value={input.Service}
          >
            <option>Choose...</option>
            <option value="0.2">Excellent-20%</option>
            <option value="0.1">Medium-10%</option>
            <option value="0.05">Not so good-5%</option>
          </select>

          <input
            className={'col-md-3'}
            type={'text'}
            name={'Name'}
            placeholder={'Customer Name'}
            onChange={inputChange}
            value={input.Name}
          />
          <button className={'btn btn-primary'} onClick={onclick}>
            Add Customer
          </button>
        </div>
      </div>
      <List data={itemsarray} />
    </>
  );
}
