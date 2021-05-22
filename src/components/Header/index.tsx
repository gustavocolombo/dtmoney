import { Container, ContentWrapper } from './styles';

import logo from '../../assets/logo.svg';

export default function Header(){
  return(
    <Container>
      <ContentWrapper>
        <img src={ logo } alt="logo" />
        <button type="button">
          Nova Transação
        </button>
      </ContentWrapper>
    </Container>
  );
}