import Modal from 'react-modal';

interface TransactionModalProps{
  isOpen : boolean;
  onRequestClose: () => void;
}

export default function TransactionModal({isOpen, onRequestClose}: TransactionModalProps){
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
}