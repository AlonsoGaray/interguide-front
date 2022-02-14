import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  border: 1px solid green;

  p {
    margin-left: 20px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  border: 1px solid red;

  p {
    margin: 15px;
  }

  input {
    width: 90%;
    height: 30px;
    margin: 0 auto;

    &:nth-child(5) {
      margin-top: 25px;
    }
  }
`;

// eslint-disable-next-line prettier/prettier
export {Container, FormContainer};
