import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{ //cabeçalho da tabela
      color: var(--text-title);
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
    }

    td{
      padding: 1rem 2rem;
      border:0;
      background: var(--shape);
      color: var(--text-title);
      border-radius: 0.2rem;

      &.withdraw{
        color: var(--red);
      }

      &.deposit{
        color: var(--green);
      }
    }

  }
`;