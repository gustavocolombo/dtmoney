import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

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

      <button type="button">
        <img src={closeImg} alt="fechar modal" onClick={onRequestClose} className="react-modal-close"/>
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Título"/>
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}