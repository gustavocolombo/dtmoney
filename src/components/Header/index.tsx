import { Container, ContentWrapper } from './styles';
import logo from '../../assets/logo.svg';

interface HeaderProps{
  onOpenTransactionModal: () => void;
}

export default function Header({ onOpenTransactionModal }: HeaderProps){

  return(
    <Container>
      <ContentWrapper>
        <img src={ logo } alt="logo" />
        <button type="button" onClick={onOpenTransactionModal}>
          Nova Transação
        </button>
      </ContentWrapper>
    </Container>
  );
}