import styled from 'styled-components';
import { transparentize, darken } from 'polished';

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  input{
    width: 100%;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.30rem;
    background: #e7e9ee;
    padding: 0 1.5rem;

    &::placeholder{
      font-size: 1rem;
      font-weight: 500;
    }
    
    & + input{
      margin-top: 1.125rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    padding: 1rem 1rem;
    font-weight: 500;
    font-size: 1rem;
    color: var(--shape);
    margin-top: 2rem;

    background: var(--green);
    border-radius: 0.30rem;
    border: 0;

    transition: 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;

export const ContainerGrid = styled.div`
  width: 100%;
  height: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap:1rem ;
  
  button{
    display: flex ;
    align-items: center;
    justify-content: space-between;
    flex-direction: row ;
    padding: 1rem 5rem;
    font-size: 1.5rem;
    font-weight: 500;

    color: var(--text-title);
    border-radius: 0.30rem;
    border: 1px solid #d7d7d7;
  }

  .active{
    background: ${transparentize(0.9, 'green')} ;
    border-color: ${darken(0.01, 'green')}
  }

  .not-active{
    background: ${transparentize(0.9, 'red')} ;
    border-color: ${darken(0.01, 'red')}
  }
`;