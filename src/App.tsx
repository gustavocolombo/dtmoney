import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './TransactionsContext';
import TransactionModal from './components/TransactionModal';

function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal={handleOpenTransactionModal}/>
        
        <TransactionModal
         isOpen={isNewTransactionModalOpen} 
         onRequestClose={handleCloseTransactionModal}/>

        <Dashboard/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
