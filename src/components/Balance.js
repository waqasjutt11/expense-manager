import React, {useContext} from 'react'
import '../App'
import {GlobalContext} from '../context/Globalcontext'

 const Balance = () => {
     const {transactions} = useContext(GlobalContext);
     const amounts = transactions.map(transaction => transaction.amount);
     console.log(amounts)
     const total = amounts.reduce((acc, item) => (acc+=item*1), 0).toFixed(2);
    return (
        <div className="Balance">
            <h4>
                Your Balance
            </h4>
            <h2 className="head1">${total}</h2>
        </div>
    )
}
export default Balance;