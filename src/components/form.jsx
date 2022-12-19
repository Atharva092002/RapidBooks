import React, { useState } from 'react';
import Tables from './temp';
import { numberFormat } from './numberformat';

function TableData() {
  const [account, setAccount] = useState([ {"id":1,"account":"A","credit":2567,"debit":3456,"total":6023},
                                            {"id":2,"account":"B","credit":1453,"debit":457,"total":1910},
                                            {"id":3,"account":"D","credit":17829,"debit":110,"total":17939} ]);
  
  const addRows = (data) => {
    const total_accounts = account.length;
    data.id = total_accounts + 1;
    const updated = [...account];
    updated.push(data);
    setAccount(updated);
  };
  
  const deleteRow = (id) => () => {
    const updated = [...account];
    for (var i = 0; i < updated.length; i++){
      var obj = updated[i];
      for (var key in obj){
        var value = obj[key];
        if(key=="id"){
          if(value==id){
            updated.splice(id-1,1);
            setAccount(updated);
          }
        }
      }
    }
    console.log(updated);
  }  

  const tableRows = account.map((key) => {
    return (
      <tr>
        <td>{key.account}</td>
        <td>{numberFormat(key.credit)}</td>
        <td>{numberFormat(key.debit)}</td>
        <td>{numberFormat(key.total)}</td>
        <td><button className="btn btn-outline-danger" onClick={deleteRow(key.id)}>Remove</button></td>
      </tr>
    );
  });
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Account</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Tables func={addRows} />
    </div>
  );
}
  
export default TableData;