import React from 'react'
import Select from 'react-select';
import '../App'
const options = [
    { value: 'food', label: 'Food' },
    { value: 'Water', label: 'Water' },
    { value: 'Houserent', label: 'House Rent' },
    { value: 'Electricity', label: 'Electricity Bill' },
    { value: 'Naturalgs', label: 'Natural Gas'},
    { vlaue: 'Fuel', label: 'Fuel'},
    { value:'Taxi', label: 'Taxi Rent'} ,
    { value: 'Books', label: 'Book'},
    { value: 'newspaper', label: 'Newspaper'},
    { value: 'clothing', label:'Clothing'},
    { value: 'shoes', label: 'Shoes'},
    { value: 'charity', label: 'Charity'},
    { value: 'magzies', label: 'Magzine'},
    { value: 'travelling', label:'Travelling'},
    { value: 'sports', label:'Sports and Sports Goods'},
    { value: 'Entertainment', label:'Cinema, Music, Theatre'},
    { value: 'NightEntertainment', label:'NightLife'}
];
  
  class SelectExpense extends React.Component {
    render(){
      return (
          <div>
              <div>
          <h4>Select Your Expenses</h4>
        <Select className="form-control" options = {options} />
        </div>
        <div className="form-controls" >
            <label htmlFor="Amount Of Transaction"><h4>Enter Expense Price</h4></label>
            
            <input  type="number"style={{width: '325px', height: '25px'}}  
                            required="required" />


        </div>
        <button className="btn">Add Expense</button>
        </div>
      );
    }
}
export default SelectExpense;