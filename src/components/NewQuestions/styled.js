import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;

  button {
    margin-right: 10px;
  }
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 20px;
  width: 100%;
  border: 1px solid red;
`;

// eslint-disable-next-line prettier/prettier
export {
 Container, TopContainer, QuestionsContainer
};
