import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const ContentWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    border: 0;
    border-radius:0.25rem ;

    padding: 0.50rem 2rem;

    color:#fff;
    background: var(--blue-light);

    transition: 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;