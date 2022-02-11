/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1025px) {
    width: 69%;
    box-shadow: 2px 2px 50px 2px rgba(0, 0, 0, 0.2);
  }
`;

const FormData = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height:100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 15px 0;
  font-size: 26px;
`;

const Inputcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 10px;
  flex-direction: column;
  border-radius: 20px;
  margin:10px 5px;
`

const Input = styled.input`
  width: 300px;
  height: 30px;
`

export {
 Container, FormData, FormContainer, Button, Input, Inputcontainer
};
