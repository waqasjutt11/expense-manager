import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//initial state
let initialState= {
    transactions: []
}

//create context
export let GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider =({children}) =>{
    let [state, dispatch]= useReducer(AppReducer, initialState);
    function deleteTransaction (id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }); }
    function addTransaction (transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>  )} 
export default GlobalProvider;