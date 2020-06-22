import React, {useState, useContext} from 'react'
import '../App'
import {GlobalContext} from '../context/Globalcontext'

  
  
  function SelectTransaction() {
    const { addTransaction } = useContext(GlobalContext);
    const [amount, setAmount]= useState(0);
    const [text, setText] = useState('')
    const onSubmit= (e) =>{ 
        e.preventDefault();
        console.log(text, amount)
        const newTransaction={
          id:  Math.floor(Math.random() * 100000000),
           text,
           amount: +amount
        }
        addTransaction(newTransaction);
    }
      return (
          <div> 
         <form onSubmit={onSubmit}>
              <div>
                  <label htmlFor="text" ><h4><strong>Text</strong></h4></label>

                  <input type="text" value={text} onChange={(e)=> setText(e.target.value) } placeholder="Your Transactions..." required/>
      
                  <label htmlFor="amount"><h4>Transactional Amount</h4></label>
            
                  <input  type="tel"  value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder="Enter Amount..." required />

                 <button className="btn">Add Transaction</button>
            
          </div>
        
        
        </form>
        

        </div>
      );

    }
  export default SelectTransaction;


