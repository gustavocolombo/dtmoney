import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { useState } from 'react';
import { GlobalStyle } from './styles/global';
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
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal}/>
        
        <TransactionModal
         isOpen={isNewTransactionModalOpen} 
         onRequestClose={handleCloseTransactionModal}/>

        <Dashboard/>
      <GlobalStyle/>
    </>
  );
}

export default App;
