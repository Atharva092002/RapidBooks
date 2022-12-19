import React, { useState } from 'react';
  
function Tables(props) {
  const [account, setAccount] = useState('');
  const [credit, setCredit] = useState('');
  const [debit, setDebit] = useState('');
  let total=0;
  let id=3;
  const changeAccount = (event) => {
    setAccount(event.target.value);
  };
  
  const changeCredit = (event) => {
    setCredit(event.target.value);
  };
  
  const changeDebit = (event) => {
    setDebit(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    total=parseInt(credit)+parseInt(debit);
    id=id+1
    const val = {
      id,
      account,
      credit,
      debit,
      total
    };
    console.log(val);
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setAccount('');
    setCredit('');
    setDebit('');
  };
  
  return (
    <div style={{marginTop:"50px"}}>
        <select value={account} onChange={changeAccount}>
                          <option>---Select Option---</option>
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                          <option>D</option>
                          <option>E</option>
        </select>
      <input type="text" value={credit} onChange={changeCredit} placeholder="Enter credit amount"
       style={{width:"300px",marginLeft:"50px"}}/>
      <input type="text" value={debit} onChange={changeDebit} placeholder="Enter debit amount"
       style={{width:"300px",marginLeft:"50px"}}/>
      <br />
      <button onClick={transferValue} className="btn btn-success" style={{marginTop:"50px"}}>ADD ROW</button>
      </div>
  );
}
  
export default Tables;