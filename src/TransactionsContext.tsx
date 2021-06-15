import { createContext } from 'react';
import { useState, useEffect, ReactNode } from 'react';
import api from '../../services/api';

interface Transaction{
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: Date;
} 

interface TransactionContextPropsChildren{
  children: ReactNode;
}

export const TransactionsContext = createContext([]);

export function TransactionsProvider({children}: TransactionContextPropsChildren){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(()=>{
   api.get('transactions').then(response => setTransactions(response.data.transactions))

  },[]);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}