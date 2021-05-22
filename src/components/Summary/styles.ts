import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  margin-top: -5rem; // isso que faz os elementos do grid ficarem por cima do header

  div{
    background:var(--shape);
    border-radius: 0.25rem;
    padding: 1rem 2rem;

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.5rem;
    }

    strong{
      display: block;
      margin-top: 2rem;
      font-size: 2rem;
      font-weight: 500;
    }

    &.highlight-total{
      background: var(--green);
      color:#fff;
    }
  }
`;