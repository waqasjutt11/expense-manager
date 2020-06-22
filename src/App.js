import React from 'react';
import './App.css'
import Header from './components/header'
import Balance from './components/Balance'
import AccontSummary from './components/AccountSummary'
import TransactionHistory from './components/TransactionHistory'
import AddTransaction from './components/AddTransaction'
import SeletTransactions from './components/SelectTransaction'
//import SelectExpense from './components/SelectExpense'
import {GlobalProvider} from './context/Globalcontext'
//import Statusbar from './components/Statusbar'
function App() {
  return (
    <GlobalProvider>
   
    
     <div className="container">
     <Header/>
     <Balance></Balance>
     <AccontSummary></AccontSummary>
     <TransactionHistory></TransactionHistory>
     <AddTransaction></AddTransaction>
     <SeletTransactions></SeletTransactions>
     </div>

     </GlobalProvider>
     
  );
}

export default App;
