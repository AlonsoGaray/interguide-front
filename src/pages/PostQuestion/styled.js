import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  border: 1px solid green;

  p {
    margin-left: 20px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
`;

export { Container, FormContainer };
