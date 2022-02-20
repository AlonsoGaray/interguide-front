import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 5px 0;
  outline: 1px solid #737373;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (min-width: 1025px) {
    width: 69%;
  }
`;

const FormData = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 15px 0;
  font-size: 26px;
  color: white;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: rgb(10, 149, 255);

  &:hover {
    background-color: #0074cc;
    cursor: pointer;
  }
`;

const Inputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px 10px 10px;
  outline: 1px solid #737373;
  border-radius: 20px;
  margin: 10px 5px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  p {
    margin: 15px 0;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 28px;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  outline: 1px solid #737373;
  box-shadow: inset rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: none;
  border-radius: 31px;
  background-color: #fff;
`;

// eslint-disable-next-line prettier/prettier
export {
 Container, FormData, FormContainer, Button, Input, Inputcontainer
};
