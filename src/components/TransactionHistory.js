import React, {useContext} from 'react'
import '../App'
import Transaction from './Transaction'
import {GlobalContext} from '../context/Globalcontext'

const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)
    return (
        <>
            <h4 className="historyh4">
                Transactions & Expenses History <br/><hr/>
            </h4>
            <ul className="history-ul">
                { transactions.map(transaction=>(<Transaction key={transaction.text} transaction={transaction}/>))
                }
                
            </ul>
     </>   
    )
}

export default TransactionHistory;
