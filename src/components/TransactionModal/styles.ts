import styled from 'styled-components';

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  input{
    width: 100%;
    height: 4rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.30rem;
    padding: 0 1.5rem;

    font-size: 1rem;
    font-weight: 500;

    & + input{
      margin-top: 1.125rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    margin-top: 1.125rem;
    padding: 1rem 1rem;
    background: var(--green);

    border: 0;
    border-radius: 0.30rem;

    color: var(--shape);
    font-size: 1.125rem;
    font-weight: 600;

    transition: 0.3s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;