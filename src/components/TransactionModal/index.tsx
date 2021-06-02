import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeimg from '../../assets/income.svg';
import outcomeimg from '../../assets/outcome.svg';
import { Container, ContainerGrid } from './styles';

interface TransactionModalProps{
  isOpen : boolean;
  onRequestClose: () => void;
}

export default function TransactionModal({isOpen, onRequestClose}: TransactionModalProps){
  
  const [typeButton, setTypeButton] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleSubmitTransaction(event: FormEvent){
    event.preventDefault();

    console.log({
      title, value, category
    })
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" className="close-modal" onClick={onRequestClose}>
        <img src={closeImg} alt="fechar modal" />
      </button>

      <Container onSubmit={handleSubmitTransaction}>
        <h2>Cadastrar Transação</h2>

        <input type="text" 
          placeholder="Título" 
          value={title} 
          onChange={event => setTitle(event.target.value)}/>

        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />
        
        <ContainerGrid>
          <button 
            type="button" 
            className={typeButton === 'deposit' ? 'active' : ''}
            onClick={()=> setTypeButton('deposit')}
          >
            <img src={incomeimg} alt="entrada" />
            Entrada
          </button>

          <button 
            type="button" 
            className={typeButton === 'withdraw' ? 'not-active' : ''}
            onClick={()=> setTypeButton('withdraw')}
          >
            <img src={outcomeimg} alt="saida" />
            Saída
          </button>
        </ContainerGrid>

        <input type="text" 
          placeholder="Categoria" 
          value={category} 
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}