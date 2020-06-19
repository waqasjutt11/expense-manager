import React from 'react'
import Select from 'react-select';
import '../App'
const options = [
    { value: 'atm', label: 'ATM' },
    { value: 'check', label: 'Check' },
    { value: 'jazzcash', label: 'JazzCash' },
    { value: 'Transfer', label: 'Transfer' },
    {value: 'Deposit', label: 'Deposit'},
    { vlaue: 'salary', label: 'Salary'},
    { value:'others', label: 'Others'} 
  ];
  
  class SelectTransaction extends React.Component {
    render(){
      return (
          <div>
              <div>
          <h4>Select Your Transaction</h4>
        <Select className="form-control" options = {options} />
        </div>
        <div className="form-controls" >
            <label htmlFor="Amount Of Transaction"><h4>Transactional Amount</h4></label>
            
            <input  type="number" className="inputtrans"style={{width: '325px', height: '25px'}}  
                            required="required" />


        </div>
        <button className="btn">Add Transaction</button>

        </div>
      );

    }
  }
  export default SelectTransaction;


