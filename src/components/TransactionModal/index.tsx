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

      <Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Título"/>
        <input type="number" placeholder="Valor"/>
        
        <ContainerGrid>
          <button type="button">
            <img src={incomeimg} alt="entrada" />
            Entrada
          </button>

          <button type="button">
            <img src={outcomeimg} alt="saida" />
            Saída
          </button>
        </ContainerGrid>

        <input type="text" placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}