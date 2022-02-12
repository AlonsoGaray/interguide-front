import styled from 'styled-components';

const Form = styled.form`
  min-height: 50rem;
  height: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;

  @media (min-width: 769px) {
    padding: 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: 15rem;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const InputContainer = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  input {
    width: 22rem;
    border-radius: 0.2rem;
    height: 30%;
    padding: 0.5rem 1rem;
    border: 0;
    background: lightgrey;
    font-size: 1.5rem;
  }
  input::placeholder {
    font-size: 1.5rem;
    font-style: italic;
  }
  input:hover {
    background: rgb(185, 185, 185);
  }

  @media (min-width: 769px) {
    input {
      width: 30rem;
    }
  }
`;

const Button = styled.button`
  background-color: rgb(31, 31, 36);
  color: white;
  width: 25rem;
  height: 4rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 1rem 0 1rem 0;
  font-size: 1.5rem;
  border: 0.2px solid gray;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px 1px gray;
  }

  &:disabled {
    background-color: gray;
    box-shadow: none;
  }

  @media (min-width: 769px) {
    width: 30rem;
    margin: 0.8rem 0 0 0;
  }
`;

const RegisterContainer = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 1rem;

  a {
    font-size: 1.8rem;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }

  p {
    margin: 0.3rem 0;
    font-size: 1.5rem;
  }
  @media (min-width: 769px) {
    width: 50rem;
  }
`;

// eslint-disable-next-line prettier/prettier
export {
 Form, LogoContainer, InputContainer, Button, RegisterContainer
};
