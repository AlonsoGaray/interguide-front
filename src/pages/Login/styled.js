import styled from 'styled-components';

const Container = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
`;

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

  p {
    font-size: 1.5rem;
    color: #333333;
    line-height: 1.2;
    text-align: center;
  }

  h1 {
    font-family: lato;
    color: rgb(10, 149, 255);
    margin-bottom: 30px;
  }
`;

const InputContainer = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;

  input {
    width: 18rem;
    height: 30%;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    border-radius: 31px;
    background-color: #fff;
  }

  input::placeholder {
    font-size: 1.5rem;
    font-style: italic;
    color: #43383e;
  }

  @media (min-width: 769px) {
    input {
      width: 29rem;
    }
  }
`;

const Button = styled.button`
  color: white;
  width: 15rem;
  height: 4rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: 0.2px solid gray;
  border-radius: 31px;
  background-color: #333333;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px 1px gray;
  }

  &:disabled {
    cursor: default;
    background-color: gray;
    box-shadow: none;
  }
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 1rem;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: #111111;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  p {
    font-size: 1.2rem;
    color: #999999;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

// eslint-disable-next-line prettier/prettier
export {
  Form,
  LogoContainer,
  InputContainer,
  Button,
  RegisterContainer,
  Container,
};
